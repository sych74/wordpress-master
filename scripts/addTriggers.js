//@auth
//@req(nodeGroup, resourceType, cleanOldTriggers, scaleUpValue, scaleUpLimit, scaleUpLoadPeriod, scaleDownValue, scaleDownLimit, scaleNodeCount, scaleDownLoadPeriod)

if (cleanOldTriggers) {
    var actions = ['ADD_NODE', 'REMOVE_NODE'];
    for (var i = 0; i < actions.length; i++){
        var array = jelastic.env.trigger.GetTriggers(appid, session, actions[i]).array;
        for (var j = 0; j < array.length; j++) jelastic.env.trigger.DeleteTrigger(appid, session, array[j].id);          
    }
}

resp = jelastic.env.trigger.AddTrigger('${env.envName}', session, 
    {
        "isEnabled": true,
        "name": "scale-up",
        "nodeGroup": nodeGroup,
        "period": scaleUpLoadPeriod,
        "condition": {
            "type": "GREATER",
            "value": scaleUpValue,
            "resourceType": resourceType,
            "valueType": "PERCENTAGES"
        },
        "actions": [
            {
                "type": "ADD_NODE",
                "customData": {
                    "limit": scaleUpLimit,
                    "count": scaleNodeCount,
                    "notify": true
                }
            }
        ]
    }
);

if (resp.result != 0) return resp;

resp = jelastic.env.trigger.AddTrigger('${env.envName}', session,
    {
        "isEnabled": true,
        "name": "scale-down",
        "nodeGroup": nodeGroup,
        "period": scaleDownLoadPeriod,
        "condition": {
            "type": "LESS",
            "value": scaleDownValue,
            "resourceType": resourceType,
            "valueType": "PERCENTAGES"
        },
        "actions": [
            {
                "type": "REMOVE_NODE",
                "customData": {
                    "limit": scaleDownLimit,
                    "count": 1,
                    "notify": true
                }
            }
        ]
    }
);

return resp;
