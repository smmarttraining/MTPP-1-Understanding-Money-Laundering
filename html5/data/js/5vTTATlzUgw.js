window.globalProvideData('slide', '{"title":"Thank you for taking this module.","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"tween","slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":18,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"63N05DEwCgQ","lmsId":"Slide18","width":1920,"height":1080,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5vTTATlzUgw","variables":[{"kind":"variable","name":"hotspot_654UsJKU5uv_xpos","type":"number","value":-1,"resume":true},{"kind":"variable","name":"hotspot_654UsJKU5uv_ypos","type":"number","value":-1,"resume":true}],"actionGroups":{"ReviewInt_654UsJKU5uv":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6kXstpqrMk9"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5fVopkyvc4f.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"654UsJKU5uv_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"654UsJKU5uv_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_654UsJKU5uv","typea":"var","valueb":"6GzyzIW1AAz","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":-5},"yOffset":{"type":"number","value":-5}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6GzyzIW1AAz.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_654UsJKU5uv"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6GzyzIW1AAz.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_654UsJKU5uv"}]}]},{"kind":"set_review","objRef":{"type":"string","value":"hotspot_654UsJKU5uv"},"enabled":{"type":"boolean","value":true}}]},"ReviewIntCorrectIncorrect_654UsJKU5uv":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6kXstpqrMk9.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6kXstpqrMk9"}}]},{"kind":"exe_actiongroup","id":"6kXstpqrMk9.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"6kXstpqrMk9"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_654UsJKU5uv":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_654UsJKU5uv"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_654UsJKU5uv":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6kXstpqrMk9"},"enabled":{"type":"boolean","value":false}}]},"654UsJKU5uv_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5fVopkyvc4f.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6GzyzIW1AAz.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_654UsJKU5uv"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5fVopkyvc4f.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5fVopkyvc4f.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_654UsJKU5uv"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5vTTATlzUgw":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6eRrPTYhp7J"}}]},"NavigationRestrictionPreviousSlide_5vTTATlzUgw":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6HYZUfL2en2","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6HYZUfL2en2","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_654UsJKU5uv","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_654UsJKU5uv"}],"elseActions":[{"kind":"exe_actiongroup","id":"654UsJKU5uv_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_654UsJKU5uv","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_654UsJKU5uv","typea":"var","valueb":"6GzyzIW1AAz","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6GzyzIW1AAz"},"completed_slide_ref":{"type":"string","value":"_player.6eytU7aEZ7g.6eRrPTYhp7J"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_654UsJKU5uv","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_654UsJKU5uv","typea":"var","valueb":"6GzyzIW1AAz","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6GzyzIW1AAz"},"completed_slide_ref":{"type":"string","value":"_player.6eytU7aEZ7g.6eRrPTYhp7J"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5vTTATlzUgw"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5vTTATlzUgw"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":114,"id":"6Lb6omwsT8w"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":81156,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"64vKNF6ztFx"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"hotspot_654UsJKU5uv"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6RUUj8tY4RA"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5mbf7u0Vntr"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5nCeq5y3qnM"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6kXstpqrMk9"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6gTjgspiixX"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6gTjgspiixX.6HJKvOQRYnz"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6gTjgspiixX.6C1hJA1FGrO"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6Lb6omwsT8w"}},{"kind":"media_play","objRef":{"type":"string","value":"6Lb6omwsT8w"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6Lb6omwsT8w"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6atfA1P9pNM"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6YJQrA8NAuI"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68NGdXaS7V8"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5rV6iNxGvi6"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":13,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":960,"rotateYPos":540,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1920,"bottom":1080,"pngfb":false,"pr":{"l":"Lib","i":317}},"html5data":{"xPos":0,"yPos":0,"width":1920,"height":1080,"strokewidth":0}},"width":1920,"height":1080,"resume":true,"useHandCursor":true,"id":"hotspot_654UsJKU5uv","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":0,"id":"01","url":"story_content/6qyApadkwgO_80_DX3840_DY3840.swf","type":"normal","altText":"Title.png","width":1920,"height":1080,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":960,"rotateYPos":540,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1920,"bottom":1080,"altText":"Title.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1920,"height":1080,"strokewidth":0}},"width":1920,"height":1080,"resume":true,"useHandCursor":true,"id":"64vKNF6ztFx","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":7,"id":"01","url":"story_content/6NhC8Cafc3L_80_RFFFFFF_DX658_DY658.swf","type":"normal","altText":"THE SM ACADEMY_white.png","width":658,"height":202,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":23,"yPos":28,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":87.5,"rotateYPos":27,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":175,"bottom":54,"altText":"THE SM ACADEMY_white.png","pngfb":false,"pr":{"l":"Lib","i":12}},"html5data":{"xPos":0,"yPos":0,"width":175,"height":54,"strokewidth":0}},"width":175,"height":54,"resume":true,"useHandCursor":true,"id":"6RUUj8tY4RA","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5mbf7u0Vntr_191959665","id":"01","linkId":"txt__default_5mbf7u0Vntr","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":734,"bottom":81,"pngfb":false,"pr":{"l":"Lib","i":319}}}],"shapemaskId":"","xPos":96,"yPos":420,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":864,"rotateYPos":43,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1728,"bottom":86,"altText":"Thank you for taking this module.","pngfb":false,"pr":{"l":"Lib","i":318}},"html5data":{"xPos":0,"yPos":0,"width":1728,"height":86,"strokewidth":0}},"width":1728,"height":86,"resume":true,"useHandCursor":true,"id":"5mbf7u0Vntr","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5nCeq5y3qnM_-1707636888","id":"01","linkId":"txt__default_5nCeq5y3qnM","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":1095,"bottom":81,"pngfb":false,"pr":{"l":"Lib","i":320}}}],"shapemaskId":"","xPos":-384,"yPos":537,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":864,"rotateYPos":43,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1728,"bottom":86,"altText":"Click here to proceed","pngfb":false,"pr":{"l":"Lib","i":318}},"html5data":{"xPos":0,"yPos":0,"width":1728,"height":86,"strokewidth":0}},"width":1728,"height":86,"resume":true,"useHandCursor":true,"id":"5nCeq5y3qnM","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":224,"yPos":540,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":257,"rotateYPos":34,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":515,"bottom":69,"altText":"Rectangular Hotspot 2","pngfb":false,"pr":{"l":"Lib","i":321}},"html5data":{"xPos":0,"yPos":0,"width":515,"height":69,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":516,"bottom":70,"altText":"Rectangular Hotspot 2","pngfb":false,"pr":{"l":"Lib","i":322}},"html5data":{"xPos":-1,"yPos":-1,"width":517,"height":71,"strokewidth":2}}}],"width":515,"height":69,"resume":true,"useHandCursor":true,"id":"6kXstpqrMk9","variables":[{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"_parent.#hotspot_654UsJKU5uv_xpos","typea":"var","valueb":-1,"typeb":"number"}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5fVopkyvc4f"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6HYZUfL2en2.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"objgroup","objects":[{"kind":"vectorshape","rotation":180,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":9,"id":"01","url":"story_content/6QUzmCGPYec_80_DX736_DY736.swf","type":"normal","altText":"Button 5.png","width":736,"height":255,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":8,"yPos":8,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":107.5,"rotateYPos":37.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":215,"bottom":75,"altText":"Button 5.png","pngfb":false,"pr":{"l":"Lib","i":16}},"html5data":{"xPos":0,"yPos":0,"width":215,"height":75,"strokewidth":0}},"width":215,"height":75,"resume":true,"useHandCursor":true,"id":"6HJKvOQRYnz","events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpRelease"},{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6C1hJA1FGrO_1580898885","id":"01","linkId":"txt__default_6C1hJA1FGrO","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":61,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":18}}}],"shapemaskId":"","xPos":81,"yPos":28,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":35,"rotateYPos":17.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":70,"bottom":36,"altText":"PREV","pngfb":false,"pr":{"l":"Lib","i":17}},"html5data":{"xPos":0,"yPos":0,"width":70,"height":36,"strokewidth":0}},"width":70,"height":35,"resume":true,"useHandCursor":true,"id":"6C1hJA1FGrO","events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpRelease"},{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]}],"accType":"button","altText":"Group\\r\\n 1","shapemaskId":"","xPos":0,"yPos":986,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":115.5,"rotateYPos":45.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"6gTjgspiixX_hot","accState":0,"imagedata":{"assetId":113,"url":"","type":"normal","altText":"Group\\r\\n 1","width":0,"height":0,"mobiledx":0,"mobiledy":0},"html5data":{"url":"Shape6gTjgspiixX.png","xPos":0,"yPos":0,"width":232,"height":90,"strokewidth":0,"mask":"5190O"}},"width":231,"height":91,"resume":true,"useHandCursor":true,"id":"6gTjgspiixX","actionGroups":{"ActGrpRelease":{"kind":"actiongroup","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}},{"kind":"history_prev"}]}}},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6atfA1P9pNM_-530086005","id":"01","linkId":"txt__default_6atfA1P9pNM","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":277,"bottom":38,"pngfb":false,"pr":{"l":"Lib","i":23}}}],"shapemaskId":"","xPos":736,"yPos":52,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":224,"rotateYPos":21.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":448,"bottom":43,"altText":"USER GUIDE","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":0,"yPos":0,"width":448,"height":43,"strokewidth":0}},"width":448,"height":43,"resume":true,"useHandCursor":true,"id":"6atfA1P9pNM","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":11,"id":"01","url":"story_content/611QVPocHHH_80_DX414_DY414.swf","type":"normal","altText":"tss-logo_450x.png","width":297,"height":53,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":856,"yPos":20,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":103.5,"rotateYPos":18.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":207,"bottom":37,"altText":"tss-logo_450x.png","pngfb":false,"pr":{"l":"Lib","i":59}},"html5data":{"xPos":0,"yPos":0,"width":207,"height":37,"strokewidth":0}},"width":207,"height":37,"resume":true,"useHandCursor":true,"id":"6YJQrA8NAuI","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"stategroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":15,"tabIndex":15,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":168,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":336,"bottom":17,"pngfb":false,"pr":{"l":"Lib","i":60}},"html5data":{"xPos":-1,"yPos":-1,"width":337,"height":18,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":336,"bottom":17,"pngfb":false,"pr":{"l":"Lib","i":60}},"html5data":{"xPos":-1,"yPos":-1,"width":337,"height":18,"strokewidth":0}}}],"width":336,"height":16,"resume":true,"useHandCursor":true,"id":"68NGdXaS7V8_track"},{"kind":"vectorshape","rotation":0,"accType":"slider","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":0,"yPos":8,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":11,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"dragpath":{"startvalue":0,"endvalue":5,"increment":1,"snap":true,"liveupdating":true,"bindto":"_player.Slider16","path":[{"kind":"segment","type":"line","anchora":{"x":"0","y":"0","dx":"0","dy":"0"},"anchorb":{"x":"313.569","y":"0","dx":"0","dy":"0"}}],"initialValue":0},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":23,"bottom":32,"altText":"Slider 2 range from 0 to 5","pngfb":false,"pr":{"l":"Lib","i":61}},"html5data":{"xPos":0,"yPos":0,"width":336,"height":48,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":23,"bottom":32,"altText":"Slider 3 range from 0 to 5","pngfb":false,"pr":{"l":"Lib","i":62}},"html5data":{"xPos":-2,"yPos":-2,"width":25,"height":34,"strokewidth":1}}}],"width":22,"height":31,"resume":true,"useHandCursor":true,"id":"68NGdXaS7V8"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"68NGdXaS7V8"}},{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"68NGdXaS7V8_track"}}],"clickdef":[{"kind":"objref","type":"string","value":"68NGdXaS7V8"},{"kind":"objref","type":"string","value":"68NGdXaS7V8_track"}]},{"kind":"state","name":"_default_Hover","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default_Hover"},"objRef":{"type":"string","value":"68NGdXaS7V8"}},{"kind":"setobjstate","stateRef":{"type":"string","value":"_default_Hover"},"objRef":{"type":"string","value":"68NGdXaS7V8_track"}}],"clickdef":[{"kind":"objref","type":"string","value":"68NGdXaS7V8"},{"kind":"objref","type":"string","value":"68NGdXaS7V8_track"}]}],"shapemaskId":"","xPos":1496,"yPos":36,"tabIndex":14,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":168,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":10,"scrolling":true,"shuffleLock":false,"width":336,"height":48,"resume":true,"useHandCursor":true,"id":"68NGdXaS7V8","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}}]},"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68NGdXaS7V8_track"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68NGdXaS7V8"}}]}},"events":[{"kind":"onvarchanged","varname":"_player.Slider16","priority":0,"actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider16","typea":"var","valueb":0,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"6aSsFfWuL6T"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider16","typea":"var","valueb":1,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"6dED9k1Gyqh"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider16","typea":"var","valueb":2,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"5eLxoTlBEPK"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider16","typea":"var","valueb":3,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"6deqWaNwqNi"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider16","typea":"var","valueb":4,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"6H0Hdfhzfrq"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider16","typea":"var","valueb":5,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"5icbcfbCaZ5"}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5rV6iNxGvi6_-333513007","id":"01","linkId":"txt__default_5rV6iNxGvi6","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":414,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":64}}}],"shapemaskId":"","xPos":1456,"yPos":84,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":212,"rotateYPos":23.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":424,"bottom":47,"altText":"drag the slider to adjust music volume","pngfb":false,"pr":{"l":"Lib","i":63}},"html5data":{"xPos":0,"yPos":0,"width":424,"height":47,"strokewidth":0}},"width":424,"height":47,"resume":true,"useHandCursor":true,"id":"5rV6iNxGvi6","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_654UsJKU5uv_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_654UsJKU5uv_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-30,"yPos":-30,"tabIndex":12,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":5,"rotateYPos":5,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":26}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":10,"height":10,"resume":true,"useHandCursor":true,"id":"hotspot_654UsJKU5uv_marker"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"654UsJKU5uv_CorrectReview","id":"01","linkId":"654UsJKU5uv_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":1000,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":324}}}],"shapemaskId":"","xPos":0,"yPos":1040,"tabIndex":16,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":960,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1920,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":323}},"html5data":{"xPos":1,"yPos":1,"width":1917,"height":37,"strokewidth":2}},"width":1920,"height":40,"resume":false,"useHandCursor":true,"id":"654UsJKU5uv_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"654UsJKU5uv_IncorrectReview","id":"01","linkId":"654UsJKU5uv_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":1009,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":326}}}],"shapemaskId":"","xPos":0,"yPos":1040,"tabIndex":17,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":960,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":14,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1920,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":325}},"html5data":{"xPos":1,"yPos":1,"width":1917,"height":37,"strokewidth":2}},"width":1920,"height":40,"resume":false,"useHandCursor":true,"id":"654UsJKU5uv_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","animations":[{"kind":"animation","id":"63N05DEwCgQ","duration":500,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":500,"alpha":{"path":[{"kind":"segment","start":"0","dstart":"0","end":"100","dend":"0"}],"duration":500,"easing":"linear","easingdir":"easein"}}]}],"useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');