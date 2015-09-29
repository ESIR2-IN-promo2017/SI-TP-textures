// atomicwaveShader
//----------------------------------------------------------------------------------------
// author: Amaury Louarn				
// contact: amaury.louarn@homnomnom.fr
// version: 0.1
// current version date: 2015-09-28
//----------------------------------------------------------------------------------------
// atomicGLwaterShader
//----------------------------------------------------------------------------------------
// TODO list
//----------------------------------------------------------------------------------------

// constructor
//------------------------
// inputs
//------------------------
// nname: 		shader name - string
// agl:			atomicGL context
// id_vs: 		vertex shader id - string
// id_fs: 		fragment shader id - string
// uuseTex: 		boolean
//				true: use texture aVertexTexCoord required in the shader
// nnbLight:	int - number of Lights in the shader
//					uPointLightPosition0|1|2 required per light in the shader
//					uPointLightColor0|1|2 required per light in the shader

atomicGLwaterShader = function(nname, agl,fragmentShaderID, vertexShaderID,nnbTex,nnbLights){
	// attributes
	// -------------------------------------------------
	// name
	this.name = nname ;
	// useTex
	this.nbTex = nnbTex ;
	// nbLights
	this.nbLight = nnbLights ;
	// program shader
	this.program ;
	
	// attributes
    this.aVertexPosition;
    this.aVertexNormal;
    this.aVertexColor;
    
    // uniforms
    this.uSinParamX1;
    this.uSinParamX2;
    this.uSinParamX3;
    this.uSinParamX4;
    
    this.uSinParamY1;
    this.uSinParamY2;
    this.uSinParamY3;
    this.uSinParamY4;
    
    this.uTime;
    this.uMVMatrix;
    this.uPMatrix;
    this.uNMatrix;
	
	// light
	this.ambientColorUniform ;
	this.pointLightLocationUniform = [] ;
	this.pointLightColorUniform = [] ;
	
	//uniform value
	this.X1;
	this.X2;
	this.X3;
	this.X4;
	
	this.Y1;
	this.Y2;
	this.Y3;
	this.Y4;
	
	// methods
	// --------------------------------------------------
	// getShader(gl, id)
	//---------------------------
	// inputs
	//------------------------
	// gl: GL context
	// id: shader id - string
	//---------------------------	
	this.getShader = function getShader(agl, id) {
		// debug
		//console.log("atomicGLShader::getShader("+id+")");
		// shader
		var shader;
        // shader source
		var shaderScript = document.getElementById(id);
        if (!shaderScript) {
			alert("Could not find shader source:"+id);
			return null;
		}
		else {
			var str = "";
			var k = shaderScript.firstChild;
			while (k) {
				if (k.nodeType == 3) {str += k.textContent;}
				k = k.nextSibling;
			}
		
			// creation shader
			if (shaderScript.type == "x-shader/x-fragment") {
				shader = agl.gl.createShader(agl.gl.FRAGMENT_SHADER);
			} else if (shaderScript.type == "x-shader/x-vertex") {
				shader = agl.gl.createShader(agl.gl.VERTEX_SHADER);
			} else {
            return null;
        }

		// set source
        agl.gl.shaderSource(shader, str);
		// shader compilation
        agl.gl.compileShader(shader);
		// debug
		//console.log("atomicGLShader::getShader -> compile result: "+agl.gl.getShaderParameter(shader, agl.gl.COMPILE_STATUS));

		// check erreur de compilation
        if (!agl.gl.getShaderParameter(shader, agl.gl.COMPILE_STATUS)) {
            alert(agl.gl.getShaderInfoLog(shader));
            return null;
        }

        return shader;
		}
	}
	
	// createProgram
	//---------------------------
	// inputs
	//------------------------
	// gl: GL context
	// fragmentShaderID: fragment shader id - string
	// vertexShaderID: fragment shader id - string
	//---------------------------	
    this.createProgram =  function (agl,fragmentShaderID, vertexShaderID) {
		// debug
		//console.log("atomicGLwaveShader::createProgram ("+fragmentShaderID+","+vertexShaderID+")");
		// creation des shaders
        var fragmentShader = 	this.getShader(agl, fragmentShaderID);
        var vertexShader = 		this.getShader(agl, vertexShaderID);
		
		// creation program et link
        var program = agl.gl.createProgram();
        agl.gl.attachShader(program, vertexShader);
        agl.gl.attachShader(program, fragmentShader);
        agl.gl.linkProgram(program);

		// debug
		console.log("atomicGLwaterShader::createProgram-> link result: "+agl.gl.getProgramParameter(program, agl.gl.LINK_STATUS));
        if (!agl.gl.getProgramParameter(program, agl.gl.LINK_STATUS)) {
            alert("Could not initialise shaders");
        }

		// attributes
		//------------------------
		// aVertexPosition
		// aVertexNormal
		// aVertexColor
		// aVertexTexCoord
		
        this.vertexPositionAttribute = agl.gl.getAttribLocation(program, "aVertexPosition");
        agl.gl.enableVertexAttribArray(this.vertexPositionAttribute);

        this.vertexNormalAttribute = agl.gl.getAttribLocation(program, "aVertexNormal");
        agl.gl.enableVertexAttribArray(this.vertexNormalAttribute);

        this.vertexColorAttribute = agl.gl.getAttribLocation(program, "aVertexColor");
        agl.gl.enableVertexAttribArray(this.vertexColorAttribute);
		
		if(this.nbTex>0){
			this.texCoordAttribute = agl.gl.getAttribLocation(program, "aVertexTexCoord");
			agl.gl.enableVertexAttribArray(this.texCoordAttribute);
		}
		
		// uniforms
		//------------------------
		// uPMatrix: 	Projection matrix
		// uMVMatrix: 	ModelView matrix
		// uNMatrix:	Normal matrix
		//------------------------
		// debug
		//console.log("atomicGLwaveShader::createProgram - uniforms ");
		// matrix
        this.pMatrixUniform = agl.gl.getUniformLocation(program, "uPMatrix");
        this.mvMatrixUniform = agl.gl.getUniformLocation(program, "uMVMatrix");
        this.nMatrixUniform = agl.gl.getUniformLocation(program, "uNMatrix");
		
		// lights
		// uAmbientColor
		// uPointLightingPosition0|1|2 required per light in the shader
		// uPointLightingColor0|1|2 required per light in the shader        
		
		//this.ambientColorUniform = agl.gl.getUniformLocation(program, "uAmbientColor");
		
        for (i = 0; i < this.nbLight; i++) { 
			// lights  	position 
			//			color
			//console.log("atomicGLwaveShader::createProgram - getUniformLocation ->"+"uPointLightPosition"+i);
			//console.log("atomicGLwaveShader::createProgram - getUniformLocation ->"+"uPointLightColor"+i);
			this.pointLightLocationUniform[i] = agl.gl.getUniformLocation(program, "uPointLightPosition"+i);
			this.pointLightColorUniform[i] = agl.gl.getUniformLocation(program, "uPointLightColor"+i);
		}
		
		// textures
		for (i = 0; i < this.nbTex; i++) { 
			// console.log("atomicGLShader::createProgram - getUniformLocation ->"+"uSampler"+i);
			this.samplerUniform[i] = agl.gl.getUniformLocation(program, "uSampler"+i);
		}
		
		// uniform defining the waves (see shader code for details)
		this.A0Uniform = agl.gl.getUniformLocation(program, "uA0");
		this.A1Uniform = agl.gl.getUniformLocation(program, "uA1");
		this.A2Uniform = agl.gl.getUniformLocation(program, "uA2");
		this.A3Uniform = agl.gl.getUniformLocation(program, "uA3");
		
		this.xRangeUniform = agl.gl.getUniformLocation(program, "uXrange");
		this.timeUniform = agl.gl.getUniformLocation(program, "utime");

        return program;
    }	
    
    // setUniforms
    //----------------------------------------
    // inputs
    //--------------
    // aGL: atomicGLContext
	// aMS: atomicGLMatrixStack
    //----------------------------------------
    this.setUniforms = function(aGL,aMS){
		// debug
		//console.log("atomicGLwaveShader::setUniforms ");
    	// set this shader as active shader
    	aGL.gl.useProgram(this.program);
    	// matrix
    	//		Projection
    	// 		Model->view
    	//		Normal built from Model->view
    	aGL.gl.uniformMatrix4fv(this.pMatrixUniform, false, aMS.pMatrix);
        aGL.gl.uniformMatrix4fv(this.mvMatrixUniform, false, aMS.mvMatrix);

        var normalMatrix = mat3.create();
        mat4.toInverseMat3(aMS.mvMatrix, normalMatrix);
        mat3.transpose(normalMatrix);
        aGL.gl.uniformMatrix3fv(this.nMatrixUniform, false, normalMatrix);
        
        // Lights
        //		ambient
        aGL.gl.uniform3f(this.ambientColorUniform,aGL.ambientLightColor[0],aGL.ambientLightColor[1],aGL.ambientLightColor[2]);
		//		Omni
		for (var i=0; i < this.nbLight ; i++){
			// debug
			//console.log("-- atomicGLwaveShader::setUniforms - Light number ("+i+")");
			//console.log("-- LightLocation @"+this.pointLightLocationUniform[i]+"::" +aGL.omniLightLocation[i*3+0] +","+ aGL.omniLightLocation[i*3+1]+","+ aGL.omniLightLocation[i*3+2] );
			//console.log("-- LightColor @"+this.pointLightColorUniform[i]+"::" +aGL.omniLightColor[i*3+0] +","+ aGL.omniLightColor[i*3+1]+","+ aGL.omniLightColor[i*3+2] );
			
			aGL.gl.uniform3f(this.pointLightLocationUniform[i], aGL.omniLightLocation[i*3+0], aGL.omniLightLocation[i*3+1], aGL.omniLightLocation[i*3+2]);
			aGL.gl.uniform3f(this.pointLightColorUniform[i],aGL.omniLightColor[i*3+0],aGL.omniLightColor[i*3+1],aGL.omniLightColor[i*3+2]);
		}
		
		// uniform defining the waves (see shader code for details)
		aGL.gl.uniform3f(this.uSinParamX1,this.X1[0],this.X1[1],this.X1[2]);
		aGL.gl.uniform3f(this.uSinParamX2,this.X2[0],this.X2[1],this.X2[2]);
		aGL.gl.uniform3f(this.uSinParamX3,this.X3[0],this.X3[1],this.X3[2]);
		aGL.gl.uniform3f(this.uSinParamX4,this.X4[0],this.X4[1],this.X4[2]);
		
		aGL.gl.uniform3f(this.uSinParamY1,this.Y1[0],this.Y1[1],this.Y1[2]);
		aGL.gl.uniform3f(this.uSinParamY2,this.Y2[0],this.Y2[1],this.Y2[2]);
		aGL.gl.uniform3f(this.uSinParamY3,this.Y3[0],this.Y3[1],this.Y3[2]);
		aGL.gl.uniform3f(this.uSinParamY4,this.Y4[0],this.Y4[1],this.Y4[2]);
		// xRange and time
		// aGL.gl.uniform2f(this.xRangeUniform,this.xRange[0],this.xRange[1]) ;
		// aGL.gl.uniform1f(this.timeUniform,this.wTime) ;
		
    }
	
	// init
	this.program  = this.createProgram(agl,fragmentShaderID, vertexShaderID) ;    
}
