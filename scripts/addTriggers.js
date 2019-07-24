var APPID = getParam("TARGET_APPID"),
    nLimitQuota;

oQoutas = jelastic.billing.account.GetQuotas(APPID, session, ["environment.maxsamenodescount"]);

if (oQoutas.result != 0) {
    return oQoutas;
}

nLimitQuota = oQoutas.array[0].value;

oRespTurnOn = jelastic.env.trigger.AddTrigger(APPID, session,'{"isEnabled":true,"name":"hs-add-nginx","nodeGroup":"cp","period":1,"condition":{"type":"GREATER","value":"${this.greater}","resourceType":"CPU","valueType":"PERCENTAGES"},"actions":[{"type":"ADD_NODE","customData":{"limit":' + nLimitQuota + ',"count":${this.nodeCount},"notify":true}}]}');

if (oRespTurnOn.result != 0) {
    return oRespTurnOn;
}

return jelastic.env.trigger.AddTrigger(APPID, session,'{"isEnabled":true,"name":"hs-add-nginx","nodeGroup":"cp","period":5,"condition":{"type":"LESS","value":${this.less},"resourceType":"CPU","valueType":"PERCENTAGES"},"actions":[{"type":"REMOVE_NODE","customData":{"limit":2,"count":1,"notify":true}}]}');
