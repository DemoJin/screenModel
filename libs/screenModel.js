/****************************************
 *                                      *
 *                                      *
 *              screenModel.js          *
 *                                      *
 *                                      *
 * **************************************/
if (typeof screenModel == "undefined" || !screenModel) {
    var screenModel = {};
};
(function () {
    screenModel = function (options) {
        this.options = {
            parent: $('#id'),
            linkId: '',//链接对象id
            urlStart: '',
            url: '',
            childUrl: '',
            sureUrl: '',
            source: '',
            async: true
        };
        $.extend(this.options, options);
        this.options.parent = $(options.parent);
        this.options.parentStr = options.parent;
        this._init();
        this.sureCard();
        this.hideCard();
    };
    screenModel.prototype = {
        _init: function () {
            var _this = this,
                screenModel = _this.options.parent;

            //selectData
            var regularData={
                //二手房
                esf_datas:[
                    {
                        "datas":[
                          {
                            "value":"-",
                            "name":"朝向不限",
                            "active":1
                          },
                          {
                            "value":"东",
                            "name":"东"
                          },
                          {
                            "value":"南",
                            "name":"南"
                          },
                          {
                            "value":"西",
                            "name":"西"
                          },
                          {
                            "value":"北",
                            "name":"北"
                          },
                          {
                            "value":"南北",
                            "name":"南北"
                          },
                          {
                            "value":"东西",
                            "name":"东西"
                          },
                          {
                            "value":"东南",
                            "name":"东南"
                          },
                          {
                            "value":"西南",
                            "name":"西南"
                          },
                          {
                            "value":"东北",
                            "name":"东北"
                          },
                          {
                            "value":"西北",
                            "name":"西北"
                          }
                        ]
                    },
                    {
                        "datas":[
                          {
                            "value":"-",
                            "name":"装修不限",
                            "active":1
                          },
                          {
                            "value":"毛坯",
                            "name":"毛坯"
                          },
                          {
                            "value":"简单装修",
                            "name":"简单装修"
                          },
                          {
                            "value":"中等装修",
                            "name":"中等装修"
                          },
                          {
                            "value":"精装修",
                            "name":"精装修"
                          },
                          {
                            "value":"豪华装修",
                            "name":"豪华装修"
                          }
                        ]
                    },
                    {
                        "datas":[
                          {
                            "value":"-",
                            "name":"房龄不限",
                            "active":1
                          },
                          {
                            "value":"2年以下",
                            "name":"2年以下"
                          },
                          {
                            "value":"2-5年",
                            "name":"2-5年"
                          },
                          {
                            "value":"5-10年",
                            "name":"5-10年"
                          },
                          {
                            "value":"10年以上",
                            "name":"10年以上"
                          }
                        ]
                    },
                    {
                        "datas":[
                          {
                            "value":"-",
                            "name":"楼层不限",
                            "active":1
                          },
                          {
                            "value":"地下",
                            "name":"地下"
                          },
                          {
                            "value":"1层",
                            "name":"1层"
                          },
                          {
                            "value":"6层以下",
                            "name":"6层以下"
                          },
                          {
                            "value":"6-12层",
                            "name":"6-12层"
                          },
                          {
                            "value":"12层以上",
                            "name":"12层以上"
                          }
                        ]
                    },
                    {
                        "datas":[
                          {
                            "value":"-",
                            "name":"来源不限",
                            "active":1
                          },
                          {
                            "value":"个人",
                            "name":"个人"
                          },
                          {
                            "value":"经纪人",
                            "name":"经纪人"
                          }
                        ]
                    },
                    {
                        "datas":[
                          {
                            "value":"-",
                            "name":"产权类型",
                            "active":1
                          },
                          {
                            "value":"商品房",
                            "name":"商品房"
                          },
                          {
                            "value":"商住两用",
                            "name":"商住两用"
                          },
                          {
                            "value":"经济适用房",
                            "name":"经济适用房"
                          },
                          {
                            "value":"使用权",
                            "name":"使用权"
                          },
                          {
                            "value":"公房",
                            "name":"公房"
                          },
                          {
                            "value":"其他",
                            "name":"其他"
                          }
                        ]
                    },
                    {
                        "datas":[
                          {
                            "value":"-",
                            "name":"类型不限",
                            "active":1
                          },
                          {
                            "value":"普通住宅",
                            "name":"普通住宅"
                          },
                          {
                            "value":"公寓",
                            "name":"公寓"
                          },
                          {
                            "value":"别墅",
                            "name":"别墅"
                          },
                          {
                            "value":"平房",
                            "name":"平房"
                          },
                          {
                            "value":"新里洋房",
                            "name":"新里洋房"
                          },
                          {
                            "value":"老公房",
                            "name":"老公房"
                          },
                          {
                            "value":"四合院",
                            "name":"四合院"
                          },
                          {
                            "value":"排屋",
                            "name":"排屋"
                          },
                          {
                            "value":"其他",
                            "name":"其他"
                          }
                        ]
                    }
                ],
                //租房
                cz_datas:[
                    {
                        "datas":[
                          {
                            "value":"-",
                            "name":"朝向不限",
                            "active":1
                          },
                          {
                            "value":"东",
                            "name":"东"
                          },
                          {
                            "value":"南",
                            "name":"南"
                          },
                          {
                            "value":"西",
                            "name":"西"
                          },
                          {
                            "value":"北",
                            "name":"北"
                          },
                          {
                            "value":"南北",
                            "name":"南北"
                          },
                          {
                            "value":"东西",
                            "name":"东西"
                          },
                          {
                            "value":"东南",
                            "name":"东南"
                          },
                          {
                            "value":"西南",
                            "name":"西南"
                          },
                          {
                            "value":"东北",
                            "name":"东北"
                          },
                          {
                            "value":"西北",
                            "name":"西北"
                          }
                        ]
                    },
                    {
                        "datas":[
                          {
                            "value":"-",
                            "name":"装修不限",
                            "active":1
                          },
                          {
                            "value":"毛坯",
                            "name":"毛坯"
                          },
                          {
                            "value":"简单装修",
                            "name":"简单装修"
                          },
                          {
                            "value":"中等装修",
                            "name":"中等装修"
                          },
                          {
                            "value":"精装修",
                            "name":"精装修"
                          },
                          {
                            "value":"豪华装修",
                            "name":"豪华装修"
                          }
                        ]
                    }
                ]
            };     
              
            _this.sendAjax(_this.options.url,function () {
               var requestData={
                   linkId:_this.options.linkId
               };
               return requestData;
            },function () {
                screenModel.find('.card_ergodic').append('<div class="loading"></div>');
            },function (datas) {
                screenModel.find('.loading').remove();

                var sData = datas.data,
                    source = datas.source;    

                _this.options.source = source;

                source =='ershoufang'?_this.forSel(regularData.esf_datas):_this.forSel(regularData.cz_datas);

                _this.getData(sData, source);

                _this.clickCurrent();

            });

        },
        forSel: function(sDatas){
            var _this = this,
                screenModel = _this.options.parent;
            _this.Console(JSON.stringify(sDatas),sDatas.length,'------');
            var selHtml = '';
            for (var i = 0; i < sDatas.length; i++) {
                var optHtml = '',
                    sObj = sDatas[i];
                _this.Console(sObj.datas.length);    
                for (var j = 0; j < sObj.datas.length; j++) {
                    var sActive= sObj.datas[j]['active'],
                        sValue= sObj.datas[j]['value'],
                        sName= sObj.datas[j]['name'];
                        optHtml+='<option value="' + sValue + '"' + (sActive?'selected':'') + '>' +sName+'</option>';
                }
                selHtml+='<li><select>'+optHtml+'</select></li>';
            }; 

            var regularHtml = '<div class="screen">'
                            +'<ul class="card_ergodic"></ul>'
                            +'<div class="card_regular">'
                            +    '<label for="keyWord">关键词<input id="keyWord" type="text" placeholder="请输入关键词"></label>'
                            +    '<ul>'
                            +   selHtml
                            +    '</ul>'
                            +'</div>'
                            +'<div class="card_btn">'
                            +    '<button class="sure_btn">确定</button>'
                            +   '<button class="cancle_btn">取消</button>'
                            +'</div>'
                        '</div>'; 
            screenModel.fadeIn(100).append(regularHtml);   
        },
        sendAjax: function (url,requestData,beforeSend, fn) {
            var _this = this,
                screenModel = _this.options.parent;
            $.ajax({
                url: _this.options.urlStart + url,
                data: requestData(),
                type: "POST",
                cache: false,
                async: _this.options.async,
                beforeSend: beforeSend,
                success: fn,
                error: function () {
                    _this.Console('数据加载有误！');
                    _this.hideCard();
                },
                complete: function () {
                    screenModel.find('.loading').remove();
                    // _this.resizeOuterIframe();
                    $('.demo li').removeClass('disabled');
                }
            });
        },
        renderHtml: function(sObj){
            var liHtml = '';
            for (var i = 0; i < sObj.datas.length; i++) {

                var value = sObj.datas[i]['value'],
                    name = sObj.datas[i]['name'],
                    active = sObj.datas[i]['active'];

                liHtml += '<span data-value="' + value + '"' + (active ? 'class="active"' : '') + '>' + name + '</span>';
            };
            return liHtml;
        },
        childRegionHtml: function(sObj){
            var childHtml = '';
    
            for (var j = 0; j < sObj.length; j++) {
                var sHtml = '',
                    dObj = sObj[j];
                for (var i = 0; i < dObj.text.length; i++) {
 
                    var value = dObj.text[i]['value'],
                        name = dObj.text[i]['name'],
                        active = dObj.text[i]['active'];

                    sHtml += '<span data-value="' + value + '"' + (active ? 'class="active"' : '') + '>' + name + '</span>';
                };
                childHtml += '<em>'+dObj.name+'</em>'+sHtml;
            }
            
            return childHtml;

        },
        getData: function(sData,source){
            var ulHtml = '';
            var _this = this;

            for(var j in sData){
                var sObj = sData[j];
  
                if(Object.prototype.toString.call(sObj)=="[object Array]"){
                    ulHtml += '<li class="'+j+'">' +  _this.childRegionHtml(sObj) + '</li>';
                }else{
                    ulHtml += '<li class="'+j+'"><label>'+sObj.name+'</label>' +  _this.renderHtml(sObj) + '</li>';
                }
            };

            _this.options.parent.addClass(source).find('.card_ergodic').append(ulHtml);
        },
        clickCurrent: function(){
            var _this = this,
                screenModel = _this.options.parent;

            $('.card_ergodic').unbind().on('click','li span',function(){
                $(this).addClass('active').siblings().removeClass('active');
                _this.Console($(this).attr('data-value'));
                if ($(this).parent().attr('class')=='region'||$(this).parent().attr('class')=='childRegion'||$(this).parent().attr('class')=='way') {
                    _this.sendAjax(_this.options.childUrl,function () {
                       _this.requestData.linkId=_this.options.linkId;
                       return _this.requestData();
                    },function () {
                        $('.card_ergodic').empty();
                    },function (datas) {
                        // screenModel.find('.loading').remove();

                        var sData = datas.data,
                            source = datas.source;
                         _this.getData(sData, source);
                    });
                };

            });
        },
        requestData : function(){
            var _this = this,
                screenModel = _this.options.parent,
                curOption = '';
            $('.card_regular li').each(function(){
                curOption+=$(this).find('select').attr('value')+',';
            });   

            //参数
            var requestData={
                source:_this.options.source,
                linkId: _this.options.linkId,
                region: $('.region .active').attr('data-value'),
                childRegion: $('.childRegion .active').attr('data-value'),
                keyWord: $('#keyWord').val(),
                option: curOption.slice(0,-1)
            }; 
            if (_this.options.source=='ershoufang') {
                requestData.total = $('.total .active').attr('data-value');
                requestData.area = $('.area .active').attr('data-value');
                requestData.brand = $('.brand .active').attr('data-value');
            }else{
                requestData.rent = $('.rent .active').attr('data-value');
                requestData.room = $('.room .active').attr('data-value');
                requestData.way = $('.way .active').attr('data-value');
            };
            return requestData;
        },
        sureCard: function () {
          var _this = this,
              screenModel = _this.options.parent;

          $('.screenModel').unbind().on('click','.sure_btn',function (event) {
              event.stopPropagation();
              _this.sendAjax(_this.options.sureUrl,function () {
                  return _this.requestData();
              },function () {
                  _this.Console(_this.requestData());
              },function (datas) {
                  _this.cancleCard();

              });
          });
           
        },
        cancleCard: function () {
            $('.screenModel').fadeOut(100).find('.screen').remove();
        },
        hideCard: function () {
            var _this = this;
    
            $('.screenModel').on('click', '.cancle_btn,.screenBg', function (event) {
                event.stopPropagation();
                _this.cancleCard();
            });
        },
        resizeOuterIframe: function () {
            var content_iframe = $('#myframe', window.parent.document);// 获取iframeID
            var content_sidebar = $('#sidebar', window.parent.document);
            if (content_iframe.length == 0) {
                var dataFlag = $('.tabs-header .tabs .tabs-selected', window.parent.document).attr('data-flag');
                content_iframe = $('.tabs-panels iframe[data-flag="' + dataFlag + '"]', window.parent.document);
            }
            var div_height = parseInt(content_iframe.contents().find(".r_content").css("height"));// 使iframe高度等于子网页高度
            content_iframe.css({
                'height': div_height + 60
            });
            content_sidebar.css({
                'height': div_height + 105
            });
        },
        cardSelect: function () {
            $(".card_regular select").on("click",function(){
                var optT=$(this).find("option:selected").text();
                $(this).prev("span").html(optT).css("color","#333");
            });
        },
        Console: function (log) {
            if (localStorage.isdebug == 1) {
                return console.log(log);
            }
        }
    };

})();