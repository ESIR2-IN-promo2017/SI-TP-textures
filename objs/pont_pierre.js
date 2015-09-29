// Obj 2 atomicGL exporter 
// author: Remi COZOT - IRISA/University of Rennes 1
pont_pierre=function(){
this.vertices =[
-3.4404,0.88141,5.3921, // vertice0
-3.7854,0.75,5.3921, // vertice1
-3.4404,0.75,5.3921, // vertice2
-4.1304,0.88141,5.3921, // vertice3
-4.1304,-5.45,5.3921, // vertice4
-3.7854,-5.45,5.3921, // vertice5
-4.1304,-5.45,5.3921, // vertice6
4.4179,-5.45,4.7021, // vertice7
-3.7854,-5.45,5.3921, // vertice8
-4.1304,-5.45,4.7021, // vertice9
-4.1304,0.88141,5.3921, // vertice10
-4.1304,-5.45,4.7021, // vertice11
-4.1304,-5.45,5.3921, // vertice12
-4.1304,0.88141,4.7021, // vertice13
-3.4404,0.88141,5.3921, // vertice14
-4.1304,0.88141,4.7021, // vertice15
-4.1304,0.88141,5.3921, // vertice16
-3.4404,0.88141,4.7021, // vertice17
-3.4404,0.88141,5.3921, // vertice18
-3.4404,7.2191e-16,4.7021, // vertice19
-3.4404,0.88141,4.7021, // vertice20
-3.4404,0.75,5.3921, // vertice21
-3.4404,0.75,14.7068, // vertice22
-3.4404,7.2191e-16,15.3968, // vertice23
-3.4404,0.88141,15.3968, // vertice24
-3.4404,0.88141,14.7068, // vertice25
-4.1304,0.88141,14.7068, // vertice26
-3.4404,0.88141,15.3968, // vertice27
-3.4404,0.88141,14.7068, // vertice28
-4.1304,0.88141,15.3968, // vertice29
-4.1304,0.88141,14.7068, // vertice30
-4.1304,-5.45,15.3968, // vertice31
-4.1304,0.88141,15.3968, // vertice32
-4.1304,-5.45,14.7068, // vertice33
-3.7854,-4.9183,14.7068, // vertice34
-4.1304,-5.45,14.7068, // vertice35
-4.1304,0.88141,14.7068, // vertice36
4.0729,-5.45,14.7068, // vertice37
4.0729,-4.9183,14.7068, // vertice38
4.4179,-5.45,14.7068, // vertice39
4.4179,0.88141,14.7068, // vertice40
4.0729,0.75,14.7068, // vertice41
4.0729,-4.2355,14.6169, // vertice42
4.0729,0.75,14.7068, // vertice43
4.0729,-4.9183,14.7068, // vertice44
4.0729,-3.1038,14.1481, // vertice45
4.0729,-4.2355,14.6169, // vertice46
-3.7854,-3.1038,14.1481, // vertice47
4.0729,-3.1038,14.1481, // vertice48
-3.7854,-4.2355,14.6169, // vertice49
4.0729,-4.9183,14.7068, // vertice50
-3.7854,-4.2355,14.6169, // vertice51
-3.7854,-4.9183,14.7068, // vertice52
-3.7854,0.75,14.7068, // vertice53
-3.7854,-4.2355,14.6169, // vertice54
-3.7854,-4.9183,14.7068, // vertice55
-3.7854,-3.1038,14.1481, // vertice56
-3.7854,-2.132,13.4024, // vertice57
-3.7854,-1.3863,12.4306, // vertice58
-3.7854,-0.91755,11.2989, // vertice59
-3.7854,0.75,5.3921, // vertice60
-3.4404,0.75,14.7068, // vertice61
-3.7854,0.75,5.3921, // vertice62
-3.7854,0.75,14.7068, // vertice63
-3.4404,0.75,5.3921, // vertice64
-3.7854,0.75,14.7068, // vertice65
-3.4404,0.75,14.7068, // vertice66
-3.4404,0.88141,14.7068, // vertice67
-3.7854,-0.75766,10.0844, // vertice68
-3.7854,-0.91755,8.87, // vertice69
-3.7854,-1.3863,7.7383, // vertice70
-3.7854,-2.132,6.7664, // vertice71
-3.7854,-3.1038,6.0207, // vertice72
-3.7854,-4.2355,5.552, // vertice73
-3.7854,-5.45,5.3921, // vertice74
-3.7854,-5.45,5.3921, // vertice75
4.0729,-4.2355,5.552, // vertice76
-3.7854,-4.2355,5.552, // vertice77
4.0729,-5.45,5.3921, // vertice78
4.0729,-5.45,5.3921, // vertice79
4.4179,-5.45,5.3921, // vertice80
4.4179,-5.45,4.7021, // vertice81
4.4179,0.88141,5.3921, // vertice82
4.4179,-5.45,5.3921, // vertice83
4.4179,0.88141,4.7021, // vertice84
4.4179,-5.45,4.7021, // vertice85
3.7279,7.2191e-16,4.7021, // vertice86
4.4179,0.88141,4.7021, // vertice87
-3.4404,7.2191e-16,4.7021, // vertice88
-4.1304,-5.45,4.7021, // vertice89
-4.1304,0.88141,4.7021, // vertice90
-3.4404,0.88141,4.7021, // vertice91
3.7279,0.88141,4.7021, // vertice92
3.7279,7.2191e-16,4.7021, // vertice93
3.7279,0.75,5.3921, // vertice94
3.7279,0.88141,4.7021, // vertice95
3.7279,0.75,14.7068, // vertice96
3.7279,7.2191e-16,15.3968, // vertice97
3.7279,0.88141,14.7068, // vertice98
3.7279,0.88141,15.3968, // vertice99
3.7279,7.2191e-16,15.3968, // vertice100
4.4179,0.88141,15.3968, // vertice101
3.7279,0.88141,15.3968, // vertice102
4.4179,-5.45,15.3968, // vertice103
-4.1304,-5.45,15.3968, // vertice104
-3.4404,7.2191e-16,15.3968, // vertice105
-4.1304,0.88141,15.3968, // vertice106
-3.4404,0.88141,15.3968, // vertice107
-4.1304,-5.45,15.3968, // vertice108
4.0729,-5.45,14.7068, // vertice109
4.4179,-5.45,15.3968, // vertice110
-4.1304,-5.45,14.7068, // vertice111
4.4179,-5.45,14.7068, // vertice112
4.4179,-5.45,14.7068, // vertice113
4.4179,0.88141,15.3968, // vertice114
4.4179,-5.45,15.3968, // vertice115
4.4179,0.88141,14.7068, // vertice116
3.7279,0.88141,14.7068, // vertice117
4.4179,0.88141,15.3968, // vertice118
4.4179,0.88141,14.7068, // vertice119
3.7279,0.88141,15.3968, // vertice120
3.7279,0.88141,14.7068, // vertice121
3.7279,0.75,14.7068, // vertice122
4.0729,0.75,14.7068, // vertice123
3.7279,0.75,5.3921, // vertice124
3.7279,0.75,14.7068, // vertice125
4.0729,0.75,5.3921, // vertice126
4.0729,0.75,10.0844, // vertice127
4.0729,-2.132,13.4024, // vertice128
4.0729,0.75,10.0844, // vertice129
-3.7854,-2.132,13.4024, // vertice130
4.0729,-2.132,13.4024, // vertice131
-3.7854,-3.1038,14.1481, // vertice132
-3.7854,-1.3863,12.4306, // vertice133
-3.7854,-2.132,13.4024, // vertice134
4.0729,-1.3863,12.4306, // vertice135
4.0729,-0.91755,11.2989, // vertice136
-3.7854,-0.91755,11.2989, // vertice137
4.0729,-0.75766,10.0844, // vertice138
-3.7854,-0.75766,10.0844, // vertice139
-3.7854,-0.75766,10.0844, // vertice140
4.0729,-0.91755,8.87, // vertice141
4.0729,-0.75766,10.0844, // vertice142
-3.7854,-0.91755,8.87, // vertice143
-3.7854,-1.3863,7.7383, // vertice144
-3.7854,-0.91755,8.87, // vertice145
4.0729,-1.3863,7.7383, // vertice146
-3.7854,-1.3863,7.7383, // vertice147
4.0729,-2.132,6.7664, // vertice148
-3.7854,-2.132,6.7664, // vertice149
-3.7854,-3.1038,6.0207, // vertice150
-3.7854,-2.132,6.7664, // vertice151
4.0729,-3.1038,6.0207, // vertice152
-3.7854,-3.1038,6.0207, // vertice153
4.0729,0.75,5.3921, // vertice154
4.0729,-3.1038,6.0207, // vertice155
4.0729,-4.2355,5.552, // vertice156
4.0729,-2.132,6.7664, // vertice157
4.0729,-1.3863,7.7383, // vertice158
4.0729,-0.91755,8.87, // vertice159
4.0729,0.75,10.0844, // vertice160
4.0729,-0.75766,10.0844, // vertice161
4.0729,-0.91755,11.2989, // vertice162
4.0729,-0.75766,10.0844, // vertice163
4.0729,-1.3863,12.4306, // vertice164
4.0729,-5.45,5.3921, // vertice165
4.0729,-5.45,5.3921, // vertice166
4.4179,0.88141,5.3921, // vertice167
4.0729,0.75,5.3921, // vertice168
4.4179,-5.45,5.3921, // vertice169
3.7279,0.75,5.3921, // vertice170
3.7279,0.88141,5.3921, // vertice171
4.4179,0.88141,5.3921, // vertice172
3.7279,0.88141,4.7021, // vertice173
3.7279,0.88141,5.3921, // vertice174
4.4179,0.88141,4.7021, // vertice175
3.7279,0.88141,5.3921 // vertice176
]
this.normals = [
1.2319e-19,1.1541e-16,1, // normal0
1.2319e-19,1.1541e-16,1, // normal1
1.2319e-19,1.1541e-16,1, // normal2
1.2319e-19,1.1541e-16,1, // normal3
1.2319e-19,1.1541e-16,1, // normal4
1.2319e-19,1.1541e-16,1, // normal5
0,-1,0, // normal6
0,-1,0, // normal7
0,-1,0, // normal8
0,-1,0, // normal9
-1,0,0, // normal10
-1,0,0, // normal11
-1,0,0, // normal12
-1,0,0, // normal13
0,1,0, // normal14
0,1,0, // normal15
0,1,0, // normal16
0,1,0, // normal17
1,9.6709e-18,7.2199e-17, // normal18
1,9.6709e-18,7.2199e-17, // normal19
1,9.6709e-18,7.2199e-17, // normal20
1,9.6709e-18,7.2199e-17, // normal21
1,9.6709e-18,7.2199e-17, // normal22
1,9.6709e-18,7.2199e-17, // normal23
1,9.6709e-18,7.2199e-17, // normal24
1,9.6709e-18,7.2199e-17, // normal25
0,1,0, // normal26
0,1,0, // normal27
0,1,0, // normal28
0,1,0, // normal29
-1,0,0, // normal30
-1,0,0, // normal31
-1,0,0, // normal32
-1,0,0, // normal33
0,0,-1, // normal34
0,0,-1, // normal35
0,0,-1, // normal36
0,0,-1, // normal37
0,0,-1, // normal38
0,0,-1, // normal39
0,0,-1, // normal40
0,0,-1, // normal41
1,-4.4534e-16,-1.0263e-16, // normal42
1,-4.4534e-16,-1.0263e-16, // normal43
1,-4.4534e-16,-1.0263e-16, // normal44
1,-4.4534e-16,-1.0263e-16, // normal45
5.3397e-17,-0.25882,-0.96593, // normal46
8.9633e-17,-0.5,-0.86603, // normal47
8.9633e-17,-0.5,-0.86603, // normal48
5.3397e-17,-0.25882,-0.96593, // normal49
0,-0.13053,-0.99145, // normal50
5.3397e-17,-0.25882,-0.96593, // normal51
0,-0.13053,-0.99145, // normal52
-1,1.4467e-17,-1.301e-16, // normal53
-1,1.4467e-17,-1.301e-16, // normal54
-1,1.4467e-17,-1.301e-16, // normal55
-1,1.4467e-17,-1.301e-16, // normal56
-1,1.4467e-17,-1.301e-16, // normal57
-1,1.4467e-17,-1.301e-16, // normal58
-1,1.4467e-17,-1.301e-16, // normal59
-1,1.4467e-17,-1.301e-16, // normal60
0,1,0, // normal61
0,1,0, // normal62
0,1,0, // normal63
0,1,0, // normal64
0,0,-1, // normal65
0,0,-1, // normal66
0,0,-1, // normal67
-1,1.4467e-17,-1.301e-16, // normal68
-1,1.4467e-17,-1.301e-16, // normal69
-1,1.4467e-17,-1.301e-16, // normal70
-1,1.4467e-17,-1.301e-16, // normal71
-1,1.4467e-17,-1.301e-16, // normal72
-1,1.4467e-17,-1.301e-16, // normal73
-1,1.4467e-17,-1.301e-16, // normal74
4.5338e-17,-0.13053,0.99145, // normal75
-5.6809e-17,-0.25882,0.96593, // normal76
-5.6809e-17,-0.25882,0.96593, // normal77
4.5338e-17,-0.13053,0.99145, // normal78
0,-1,0, // normal79
0,-1,0, // normal80
1,0,0, // normal81
1,0,0, // normal82
1,0,0, // normal83
1,0,0, // normal84
0,0,-1, // normal85
0,0,-1, // normal86
0,0,-1, // normal87
0,0,-1, // normal88
0,0,-1, // normal89
0,0,-1, // normal90
0,0,-1, // normal91
0,0,-1, // normal92
-1,0,0, // normal93
-1,0,0, // normal94
-1,0,0, // normal95
-1,0,0, // normal96
-1,0,0, // normal97
-1,0,0, // normal98
-1,0,0, // normal99
0,0,1, // normal100
0,0,1, // normal101
0,0,1, // normal102
0,0,1, // normal103
0,0,1, // normal104
0,0,1, // normal105
0,0,1, // normal106
0,0,1, // normal107
0,-1,0, // normal108
0,-1,0, // normal109
0,-1,0, // normal110
0,-1,0, // normal111
0,-1,0, // normal112
1,0,0, // normal113
1,0,0, // normal114
1,0,0, // normal115
1,0,0, // normal116
0,1,-5.2312e-16, // normal117
0,1,-5.2312e-16, // normal118
0,1,-5.2312e-16, // normal119
0,1,-5.2312e-16, // normal120
0,0,-1, // normal121
0,0,-1, // normal122
0,1,0, // normal123
0,1,0, // normal124
0,1,0, // normal125
0,1,0, // normal126
0,1,0, // normal127
1,-4.4534e-16,-1.0263e-16, // normal128
1,-4.4534e-16,-1.0263e-16, // normal129
5.2841e-17,-0.70711,-0.70711, // normal130
5.2841e-17,-0.70711,-0.70711, // normal131
8.9633e-17,-0.5,-0.86603, // normal132
1.2447e-17,-0.86603,-0.5, // normal133
5.2841e-17,-0.70711,-0.70711, // normal134
1.2447e-17,-0.86603,-0.5, // normal135
-1.0097e-17,-0.96593,-0.25882, // normal136
-1.0097e-17,-0.96593,-0.25882, // normal137
-1.1776e-17,-0.99145,-0.13053, // normal138
-1.1776e-17,-0.99145,-0.13053, // normal139
-1.1187e-17,-0.99145,0.13053, // normal140
-6.4919e-17,-0.96593,0.25882, // normal141
-1.1187e-17,-0.99145,0.13053, // normal142
-6.4919e-17,-0.96593,0.25882, // normal143
-1.3036e-16,-0.86603,0.5, // normal144
-6.4919e-17,-0.96593,0.25882, // normal145
-1.3036e-16,-0.86603,0.5, // normal146
-1.3036e-16,-0.86603,0.5, // normal147
-1.4911e-16,-0.70711,0.70711, // normal148
-1.4911e-16,-0.70711,0.70711, // normal149
-1.5771e-16,-0.5,0.86603, // normal150
-1.4911e-16,-0.70711,0.70711, // normal151
-1.5771e-16,-0.5,0.86603, // normal152
-1.5771e-16,-0.5,0.86603, // normal153
1,-9.5469e-17,1.9044e-16, // normal154
1,-9.5469e-17,1.9044e-16, // normal155
1,-9.5469e-17,1.9044e-16, // normal156
1,-9.5469e-17,1.9044e-16, // normal157
1,-9.5469e-17,1.9044e-16, // normal158
1,-9.5469e-17,1.9044e-16, // normal159
1,-9.5469e-17,1.9044e-16, // normal160
1,-9.5469e-17,1.9044e-16, // normal161
1,-4.4534e-16,-1.0263e-16, // normal162
1,-4.4534e-16,-1.0263e-16, // normal163
1,-4.4534e-16,-1.0263e-16, // normal164
1,-9.5469e-17,1.9044e-16, // normal165
0,0,1, // normal166
0,0,1, // normal167
0,0,1, // normal168
0,0,1, // normal169
0,0,1, // normal170
0,0,1, // normal171
0,1,0, // normal172
0,1,0, // normal173
0,1,0, // normal174
0,1,0, // normal175
-1,0,0 // normal176
]
this.uv = [
-1.8812,0.96392, // uv0
-2.0699,0.82021, // uv1
-1.8812,0.82021, // uv2
-2.2585,0.96392, // uv3
-2.2585,-5.9602, // uv4
-2.0699,-5.9602, // uv5
2.2585,-5.8969, // uv6
-2.4157,-5.1423, // uv7
2.0699,-5.8969, // uv8
2.2585,-5.1423, // uv9
2.9484,0.96392, // uv10
2.5711,-5.9602, // uv11
2.9484,-5.9602, // uv12
2.5711,0.96392, // uv13
-1.8812,-5.8969, // uv14
-2.2585,-5.1423, // uv15
-2.2585,-5.8969, // uv16
-1.8812,-5.1423, // uv17
-2.9484,0.96392, // uv18
-2.5711,8.2588e-16, // uv19
-2.5711,0.96392, // uv20
-2.9484,0.82021, // uv21
-8.0418,0.82021, // uv22
-8.4191,8.2588e-16, // uv23
-8.4191,0.96392, // uv24
-8.0418,0.96392, // uv25
-2.2585,-16.0835, // uv26
-1.8812,-16.8381, // uv27
-1.8812,-16.0835, // uv28
-2.2585,-16.8381, // uv29
8.0418,0.96392, // uv30
8.4191,-5.9602, // uv31
8.4191,0.96392, // uv32
8.0418,-5.9602, // uv33
2.0699,-5.3787, // uv34
2.2585,-5.9602, // uv35
2.2585,0.96392, // uv36
-2.2271,-5.9602, // uv37
-2.2271,-5.3787, // uv38
-2.4157,-5.9602, // uv39
-2.4157,0.96392, // uv40
-2.2271,0.82021, // uv41
-7.9926,-4.632, // uv42
-8.0418,0.82021, // uv43
-8.0418,-5.3787, // uv44
-7.7363,-3.3944, // uv45
0.37788,8.5939, // uv46
1.0496,-1.7764e-15, // uv47
1.0496,8.5939, // uv48
0.37788,-1.7764e-15, // uv49
8.8818e-16,8.5939, // uv50
0.37788,-8.8818e-16, // uv51
8.8818e-16,-8.8818e-16, // uv52
8.0418,0.82021, // uv53
7.9926,-4.632, // uv54
8.0418,-5.3787, // uv55
7.7363,-3.3944, // uv56
7.3285,-2.3316, // uv57
6.7971,-1.5161, // uv58
6.1783,-1.0034, // uv59
2.9484,0.82021, // uv60
-1.8812,-16.0835, // uv61
-2.0699,-5.8969, // uv62
-2.0699,-16.0835, // uv63
-1.8812,-5.8969, // uv64
2.0699,0.82021, // uv65
1.8812,0.82021, // uv66
1.8812,0.96392, // uv67
5.5142,-0.82858, // uv68
4.8502,-1.0034, // uv69
4.2313,-1.5161, // uv70
3.6999,-2.3316, // uv71
3.2922,-3.3944, // uv72
3.0359,-4.632, // uv73
2.9484,-5.9602, // uv74
4,0, // uv75
3.3333,8.5939, // uv76
3.3333,8.8818e-16, // uv77
4,8.5939, // uv78
-2.2271,-5.8969, // uv79
-2.4157,-5.8969, // uv80
-2.5711,-5.9602, // uv81
-2.9484,0.96392, // uv82
-2.9484,-5.9602, // uv83
-2.5711,0.96392, // uv84
-2.4157,-5.9602, // uv85
-2.0384,7.8949e-16, // uv86
-2.4157,0.96392, // uv87
1.8812,7.8949e-16, // uv88
2.2585,-5.9602, // uv89
2.2585,0.96392, // uv90
1.8812,0.96392, // uv91
-2.0384,0.96392, // uv92
2.5711,7.8949e-16, // uv93
2.9484,0.82021, // uv94
2.5711,0.96392, // uv95
8.0418,0.82021, // uv96
8.4191,7.8949e-16, // uv97
8.0418,0.96392, // uv98
8.4191,0.96392, // uv99
2.0384,7.8949e-16, // uv100
2.4157,0.96392, // uv101
2.0384,0.96392, // uv102
2.4157,-5.9602, // uv103
-2.2585,-5.9602, // uv104
-1.8812,7.8949e-16, // uv105
-2.2585,0.96392, // uv106
-1.8812,0.96392, // uv107
2.2585,-16.8381, // uv108
-2.2271,-16.0835, // uv109
-2.4157,-16.8381, // uv110
2.2585,-16.0835, // uv111
-2.4157,-16.0835, // uv112
-8.0418,-5.9602, // uv113
-8.4191,0.96392, // uv114
-8.4191,-5.9602, // uv115
-8.0418,0.96392, // uv116
2.0384,-16.0835, // uv117
2.4157,-16.8381, // uv118
2.4157,-16.0835, // uv119
2.0384,-16.8381, // uv120
-2.0384,0.96392, // uv121
-2.0384,0.82021, // uv122
2.2271,-16.0835, // uv123
2.0384,-5.8969, // uv124
2.0384,-16.0835, // uv125
2.2271,-5.8969, // uv126
2.2271,-11.0285, // uv127
-7.3285,-2.3316, // uv128
-5.5142,0.82021, // uv129
1.7213,-8.8818e-16, // uv130
1.7213,8.5939, // uv131
1.0496,-8.8818e-16, // uv132
2.3931,8.8818e-16, // uv133
1.7213,8.8818e-16, // uv134
2.3931,8.5939, // uv135
3.0648,8.5939, // uv136
3.0648,0, // uv137
3.7365,8.5939, // uv138
3.7365,0, // uv139
-1.7764e-15,1.7764e-15, // uv140
0.66667,8.5939, // uv141
-1.7764e-15,8.5939, // uv142
0.66667,1.7764e-15, // uv143
1.3333,0, // uv144
0.66667,-8.8818e-16, // uv145
1.3333,8.5939, // uv146
1.3333,1.7764e-15, // uv147
2,8.5939, // uv148
2,1.7764e-15, // uv149
2.6667,0, // uv150
2,0, // uv151
2.6667,8.5939, // uv152
2.6667,8.8818e-16, // uv153
-2.9484,0.82021, // uv154
-3.2922,-3.3944, // uv155
-3.0359,-4.632, // uv156
-3.6999,-2.3316, // uv157
-4.2313,-1.5161, // uv158
-4.8502,-1.0034, // uv159
-5.5142,0.82021, // uv160
-5.5142,-0.82858, // uv161
-6.1783,-1.0034, // uv162
-5.5142,-0.82858, // uv163
-6.7971,-1.5161, // uv164
-2.9484,-5.9602, // uv165
2.2271,-5.9602, // uv166
2.4157,0.96392, // uv167
2.2271,0.82021, // uv168
2.4157,-5.9602, // uv169
2.0384,0.82021, // uv170
2.0384,0.96392, // uv171
2.4157,-5.8969, // uv172
2.0384,-5.1423, // uv173
2.0384,-5.8969, // uv174
2.4157,-5.1423, // uv175
2.9484,0.96392 // uv176
]
this.index=[
0,
1,
2,
3,
1,
0,
4,
1,
3,
1,
4,
5,
6,
7,
8,
7,
6,
9,
10,
11,
12,
11,
10,
13,
14,
15,
16,
15,
14,
17,
18,
19,
20,
21,
19,
18,
22,
19,
21,
22,
23,
19,
23,
22,
24,
25,
24,
22,
26,
27,
28,
27,
26,
29,
30,
31,
32,
31,
30,
33,
34,
35,
36,
35,
34,
37,
38,
37,
34,
38,
39,
37,
39,
38,
40,
40,
38,
41,
42,
43,
44,
43,
42,
45,
46,
47,
48,
47,
46,
49,
50,
51,
46,
51,
50,
52,
53,
54,
55,
54,
53,
56,
56,
53,
57,
57,
53,
58,
58,
53,
59,
59,
53,
60,
61,
62,
63,
62,
61,
64,
65,
36,
66,
34,
36,
65,
66,
36,
67,
59,
60,
68,
68,
60,
69,
69,
60,
70,
70,
60,
71,
71,
60,
72,
72,
60,
73,
73,
60,
74,
75,
76,
77,
76,
75,
78,
8,
7,
79,
79,
7,
80,
81,
82,
83,
82,
81,
84,
85,
86,
87,
86,
85,
88,
89,
88,
85,
88,
89,
90,
88,
90,
91,
87,
86,
92,
93,
94,
95,
93,
96,
94,
97,
96,
93,
97,
98,
96,
98,
97,
99,
100,
101,
102,
100,
103,
101,
103,
100,
104,
105,
104,
100,
104,
105,
106,
106,
105,
107,
108,
109,
110,
109,
108,
111,
110,
109,
112,
113,
114,
115,
114,
113,
116,
117,
118,
119,
118,
117,
120,
40,
41,
121,
121,
41,
122,
123,
124,
125,
124,
123,
126,
126,
123,
127,
43,
128,
129,
43,
45,
128,
48,
130,
131,
130,
48,
132,
133,
131,
134,
131,
133,
135,
133,
136,
135,
136,
133,
137,
137,
138,
136,
138,
137,
139,
140,
141,
142,
141,
140,
143,
144,
141,
145,
141,
144,
146,
147,
148,
146,
148,
147,
149,
150,
148,
151,
148,
150,
152,
77,
152,
153,
152,
77,
76,
154,
155,
156,
154,
157,
155,
154,
158,
157,
154,
159,
158,
160,
159,
154,
159,
160,
161,
129,
162,
163,
129,
164,
162,
129,
128,
164,
154,
156,
165,
166,
167,
168,
167,
166,
169,
168,
167,
170,
170,
167,
171,
172,
173,
174,
173,
172,
175,
95,
94,
176
]
}