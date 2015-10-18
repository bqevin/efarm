/**
 * Created by User on 10/18/15.
 */
app.factory("$DATA", [
    function(){
        var api = {
            "data" : {
                "farmers" : [
                    {
                        "names": "Brian Wachanga",
                        "phone": "0711304589",
                        "group": "NyeriCropers",
                        "location": "Nyeri",
                        "password" : "123",
                        "farmers" : [
                            {
                                "names": "Juma Nyayieka",
                                "phone": "0711304589"
                            },
                            {
                                "names": "Robin Opore",
                                "phone": "0709304589"
                            },
                            {
                                "names": "Gracious Wanjiru",
                                "phone": "0710304589"
                            }
                        ]
                    }
                ],
                "buyers"  : [
                    {
                        "names" : "Kevin Wahome",
                        "phone" : "0725326459",
                        "org"   : "Talicraft Ltd",
                        "password": "123"
                    }
                ]
            },
            "publish" : function(type, object){
                api.data[type].push(object);
                console.log(api.data);
            },
            "list" : function(type){
                return api.data[type];
            }
        }
        return api;
    }
])