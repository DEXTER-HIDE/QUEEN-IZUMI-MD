const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"gGyNv3EfgifjB2Db2XaS+drO8tLWS++UDTgjEwoW3X0="},"public":{"type":"Buffer","data":"nfvHonBC4QwRvZtlGAIqMOlPE6x2Dl9ASQldd/klTAw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"WMBgVln73JytDzPu0SM3pl1hE0ldY/x04AFcuAQC1l4="},"public":{"type":"Buffer","data":"S9O3WsxIIvZ7+Mb+5w2uRWR7nZ+1B/QdjLRKjlOc2DQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"oP0EpsabTr6UQOPPJE1T42wnim/XfSbTfD91/vWm9mA="},"public":{"type":"Buffer","data":"rjIwa6ZPrX0J9cvDsw1oTg2JbJRzMK3e6e5JcLRqmw4="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"GHKWsJQijrLXarVzwWW/gAtgDIobpkO767f446Mj7Us="},"public":{"type":"Buffer","data":"j8nK8Nrs0UfLikKM/0g/YwUxeXXKa4myrT4wyrboYGM="}},"signature":{"type":"Buffer","data":"iT8g/oDDcRgdMEylSXBBIrSuoDK3AhnO2kMFERzxoV5+evfKl4j1CYgNMJ3MSa7AP/rXNCwp4Hz9Hz3nAg25Ag=="},"keyId":1},"registrationId":176,"advSecretKey":"/PJpPUdm+GPJHUqN7RXsxUCSMQPTCNVFaylan8Sw9zg=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"T969hpIwRPuPJUpz8zVUWw","phoneId":"d1a778cc-1632-420b-af4e-add35cb1d940","identityId":{"type":"Buffer","data":"g3UOipaF/l4rqLeiw1O1Rn+eZlA="},"registered":true,"backupToken":{"type":"Buffer","data":"zRJBcp5hSqq9zP2Oyl5YRrLDWf4="},"registration":{},"pairingCode":"RJP2FPCG","me":{"id":"94753574803:28@s.whatsapp.net"},"account":{"details":"CKb/9pkDEKXbh7MGGAYgACgA","accountSignatureKey":"zGq5yzRpir9w/Xfpo3i5KNLPmiCuq3vWULv78WCWGHY=","accountSignature":"0ofdq3NeeQLkf6nRerokYtLrtxsIwcN0MPhCbT9lrWYUtA4E3QKqZG86NmYD8YGFqlW2BCwpwXTyrWKGN7QcBQ==","deviceSignature":"+Jh6otmWAG/MsriHRhI9JTP6hMq8SQViYBXzT0VH7cudRzfd7QYCNayceo6GgysTKbfxOX1koZKaIYQsL8uEBw=="},"signalIdentities":[{"identifier":{"name":"94753574803:28@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bcxqucs0aYq/cP136aN4uSjSz5ogrqt71lC7+/Fglhh2"}}],"platform":"android","lastAccountSyncTimestamp":1717693864,"myAppStateKeyId":"AAAAAKb+"}',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'youre POSTGRESQL url',
LANG: process.env.BOT_LANG || 'EN' ,
PREFIX: process.env.PREFIX || '.',
ANTI_BAD: process.env.ANTI_BAD || 'false',
MAX_SIZE: process.env.MAX_SIZE || 300,
ONLY_GROUP: process.env.ONLY_GROUP || 'false',
ANTI_LINK: process.env.ANTI_LINK || 'false' ,
ANTI_BOT: process.env.ANTI_BOT || 'false',
ALIVE: process.env.ALIVE || `default`,
FOOTER: process.env.FOOTER ||  '©ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ',
LOGO: process.env.LOGO || `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg` 
};
