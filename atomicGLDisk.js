// atomicGL
//----------------------------------------------------------------------------------------
// author: Delambily Clementine - Louarn Amaury
// version: 0.1
// current version date: 2015/09/22
//----------------------------------------------------------------------------------------
// atomicGLDisk
//----------------------------------------------------------------------------------------
// TODO list
//----------------------------------------------------------------------------------------


// constructor
//------------------------
// inputs
//------------------------
// nname: 		name of the Disk - string
// disk size
// rthis.radius:			float
// lthis.hheight: float
// lthis.longitudeBands: int
atomicGLDisk = function(nname,rradius, cconcentricCircles,llongitudeBands){
	// attributes
	// -------------------------------------------------
	// name
	this.name = nname ;
	// size
	this.radius	= rradius ;
	this.concentricCircles = cconcentricCircles;
	this.longitudeBands	= llongitudeBands ;
	
	// vertices array
	this.verticesArray 	= [];
	// normals array
	this.normalsArray  = [];
	// texture coordinates array
    this.textureCoordsArray = [];
	// color array
    this.colorsArray = [];
	// indexes
    this.DiskVertexIndices = [];		

	// buffers
	this.DiskVertexPositionBuffer	;
    this.DiskVertexNormalBuffer		;
    this.DiskVertexTexCoordBuffer 	;
    this.DiskVertexColorBuffer 		;
    this.DiskVertexIndexBuffer 		;
	
	this.DiskVertexPositionBufferItemSize	;
    this.DiskVertexNormalBufferItemSize		;
    this.DiskVertexTexCoordBufferItemSize 	;
    this.DiskVertexColorBufferItemSize 		;
    this.DiskVertexIndexBufferItemSize 		;
	
	this.DiskVertexPositionBufferNumItems	;
    this.DiskVertexNormalBufferNumItems		;
    this.DiskVertexTexCoordBufferNumItems 	;
    this.DiskVertexColorBufferNumItems 		;
    this.DiskVertexIndexBufferNumItems 		;
	
	this.DiskDefaultColor = [0.0,0.0,1.0];

	// methods
	// setFaceColor(face, RGB)
	//---------------------------
	// inputs
	//---------------------------
	// face: 	"All" (String)
	// RBG: 	[float, float, float]
	//---------------------------
	this.setFaceColor = function ( face, RGB) {
		// debug
		console.log("atomicGLDisk("+this.name+")::setFaceColor");
		
		// switch face
		switch(face){
			case "All":
				for(var i = 0; i < this.colorsArray.length; ++i)
					this.colorsArray[i] = RGB[i%3];
			break;		
		}
	}
	//---------------------------
	// initGLBuffers
	//---------------------------
	// inputs
	//------------------------
	// agl: openGL context
	//---------------------------
	this.initGLBuffers = function(agl){
		// debug
		console.log("atomicGLDisk("+this.name+")::initGLBuffers");
		var gl = agl.gl ;
		// DiskVertexPositionBuffer
		this.DiskVertexPositionBuffer	= gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.DiskVertexPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.verticesArray), gl.STATIC_DRAW);


		// DiskVertexNormalBuffer		
		this.DiskVertexNormalBuffer		= gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.DiskVertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.normalsArray), gl.STATIC_DRAW);

		// DiskVertexColorBuffer		
		this.DiskVertexColorBuffer 	= gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.DiskVertexColorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.colorsArray), gl.STATIC_DRAW);
		
		// DiskVertexTexCoordBuffer		
		this.DiskVertexTexCoordBuffer 	= gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.DiskVertexTexCoordBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.textureCoordsArray), gl.STATIC_DRAW);
 		
		// DiskVertexIndexBuffer	
		this.DiskVertexIndexBuffer 		= gl.createBuffer();	
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.DiskVertexIndexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.DiskVertexIndices), gl.STATIC_DRAW);
	}
	//---------------------------
	// draw(aGL,aMS,idProg)
	//---------------------------
	// inputs
	//---------------------------
	// aGL: GL context 		- atomicGLContext
	// aMS: Matrix Stacks 	- atomicMatrixStack
	// idProg: Shader index - integer
	//---------------------------
	this.draw = function(aGL,aMS,idProg){
		// debug
		console.log("atomicGLDisk("+this.name+")::draw(progId: "+idProg+")");
		
		// activate shader
		aGL.gl.useProgram(aGL.shaderPrograms[idProg].program);
		// setUniforms: matrices and lights
		aGL.shaderPrograms[idProg].setUniforms(aGL,aMS);
		
		// link buffer to attributes
		//positions
		aGL.gl.bindBuffer(aGL.gl.ARRAY_BUFFER, this.DiskVertexPositionBuffer);
        aGL.gl.vertexAttribPointer(aGL.shaderPrograms[idProg].vertexPositionAttribute, this.DiskVertexPositionBufferItemSize, aGL.gl.FLOAT, false, 0, 0);
		//normals
        aGL.gl.bindBuffer(aGL.gl.ARRAY_BUFFER, this.DiskVertexNormalBuffer);
        aGL.gl.vertexAttribPointer(aGL.shaderPrograms[idProg].vertexNormalAttribute, this.DiskVertexNormalBufferItemSize, aGL.gl.FLOAT, false, 0, 0);
		// colors
        aGL.gl.bindBuffer(aGL.gl.ARRAY_BUFFER, this.DiskVertexColorBuffer);
        aGL.gl.vertexAttribPointer(aGL.shaderPrograms[idProg].vertexColorAttribute, this.DiskVertexColorBufferItemSize, aGL.gl.FLOAT, false, 0, 0);
		// textures
		if(aGL.shaderPrograms[idProg].useTex){
			aGL.gl.bindBuffer(aGL.gl.ARRAY_BUFFER, this.DiskVertexTexCoordBuffer);
			aGL.gl.vertexAttribPointer(aGL.shaderPrograms[idProg].texCoordAttribute, this.DiskVertexTexCoordBufferItemSize, aGL.gl.FLOAT, false, 0, 0);		

		}
		// indexes
        aGL.gl.bindBuffer(aGL.gl.ELEMENT_ARRAY_BUFFER, this.DiskVertexIndexBuffer);
		
		// draw Disk
        aGL.gl.drawElements(aGL.gl.TRIANGLES, this.DiskVertexIndexBufferNumItems, aGL.gl.UNSIGNED_SHORT, 0);

	}
	//-----------------------------------------------------
    
    /**
     *  @brief creates a point
     *	@param centerPoint an array containing the coordinates of the center point [x y z]
     *	@param normal an array containing the coordinates of the normal of this dish [x y z]
     *	@param color an array containing the color of this point [R G B]
     *	@returns the index of this point in the verticesArray
     **/
    this.createPoint = function(coordinates, normal, color)
    {
    	var pointIndex = this.verticesArray.length/3;
    	this.verticesArray.push(coordinates[0]);
    	this.verticesArray.push(coordinates[1]);
    	this.verticesArray.push(coordinates[2]);
    	
    	this.normalsArray.push(normal[0]);
		this.normalsArray.push(normal[1]);
		this.normalsArray.push(normal[2]);
	
		this.colorsArray.push(color[0]);
		this.colorsArray.push(color[1]);
   	 	this.colorsArray.push(color[2]);
   	 	
   	 	return pointIndex;
    }
    
    this.createLine = function(theta, yPlane, normal)
    {
    	var lineIndices = [];
    	
    	for(var i = 0; i < this.concentricCircles; ++i)
    	{
    		var rho = (i+1)*(this.radius / this.concentricCircles);
    		var x = rho * Math.cos(theta);
    		var y = yPlane;
    		var z = rho * Math.sin(theta);
    		lineIndices[i] = this.createPoint([x,y,z], normal, this.DiskDefaultColor);
    	}
    	
    	return lineIndices;
    }
    
    /**
     *  @brief creates a disk of center centerPoint, and of radius this.radius
     *	@param centerPoint an array containing the coordinates of the center point [x y z]
     *	@param normal an array containing the coordinates of the normal of this dish [x y z]
     **/
    this.createDisk = function(centerPoint, normal)
    {
    	var yPlane = centerPoint[1];
    	//central point
    	var centerPointIndex = this.createPoint(centerPoint, normal, this.DiskDefaultColor);
    	
    	var firstLineIndices = this.createLine(0, yPlane, normal);
    	
    	var lastLineIndices = firstLineIndices;
    	
    	for(var lonNumber = 1; lonNumber < this.longitudeBands; ++lonNumber)
    	{
    		var theta = lonNumber * 2 * Math.PI / this.longitudeBands;
    		
    		var thisLineIndices = this.createLine(theta, yPlane, normal);
    		
    		this.DiskVertexIndices.push(centerPointIndex);
    		this.DiskVertexIndices.push(lastLineIndices[0]);
    		this.DiskVertexIndices.push(thisLineIndices[0]);
    		
    		for(var i = 1; i < thisLineIndices.length; ++i)
    		{
    			this.DiskVertexIndices.push(lastLineIndices[i-1]);
    			this.DiskVertexIndices.push(thisLineIndices[i-1]);
    			this.DiskVertexIndices.push(thisLineIndices[i]);
    			
    			this.DiskVertexIndices.push(lastLineIndices[i-1]);
    			this.DiskVertexIndices.push(lastLineIndices[i]);
    			this.DiskVertexIndices.push(thisLineIndices[i]);
    		}
    		
    		lastLineIndices = thisLineIndices;
    	}
    	
    	this.DiskVertexIndices.push(centerPointIndex);
		this.DiskVertexIndices.push(lastLineIndices[0]);
		this.DiskVertexIndices.push(firstLineIndices[0]);
		
		for(var i = 1; i < thisLineIndices.length; ++i)
		{
			this.DiskVertexIndices.push(thisLineIndices[i-1]);
			this.DiskVertexIndices.push(firstLineIndices[i-1]);
			this.DiskVertexIndices.push(firstLineIndices[i]);
			
			this.DiskVertexIndices.push(thisLineIndices[i-1]);
			this.DiskVertexIndices.push(thisLineIndices[i]);
			this.DiskVertexIndices.push(firstLineIndices[i]);
		}
    }
    
    
	// init
	//-----------------------------
	this.createDisk([0,0,0], [0,1,0]);
    
    
	this.DiskVertexPositionBufferItemSize 	= 3	;
  	this.DiskVertexNormalBufferItemSize		= 3	;
   	this.DiskVertexTexCoordBufferItemSize	= 2 ;
   	this.DiskVertexColorBufferItemSize		= 3 ;
   	this.DiskVertexIndexBufferItemSize 		= 1 ;
	
	this.DiskVertexPositionBufferNumItems	= this.verticesArray.length / 3 ;
    this.DiskVertexNormalBufferNumItems		= this.normalsArray.length / 3 ;
//    this.DiskVertexTexCoordBufferNumItems 	= this.textureCoordsArray/2 ;
	this.DiskVertexColorBufferNumItems 		= this.colorsArray /3 ;
    this.DiskVertexIndexBufferNumItems 		= this.DiskVertexIndices.length;
}
