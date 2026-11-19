// THEE Onset Enterprise – Google Sheet backend. Paste into Extensions > Apps Script of your Sheet.
function doPost(e){
  var b=JSON.parse(e.postData.contents),ss=SpreadsheetApp.getActiveSpreadsheet();
  if(b.mode==='pull'){
    var s=ss.getSheetByName('Backup');
    return out({data:s&&s.getRange('A1').getValue()?JSON.parse(s.getRange('A1').getValue()):null});
  }
  var d=b.data;
  put(ss,'Backup',[[JSON.stringify(d)]]);
  put(ss,'Transactions',[['Date','Type','Account','Category','Amount','Note']].concat(d.tx.map(function(t){return[t.date,t.type,t.acct,t.cat,t.amt,t.note]})));
  put(ss,'Goals',[['Goal','Target','Saved','Due']].concat(d.goals.map(function(g){return[g.name,g.target,g.saved,g.due]})));
  put(ss,'Debts',[['Name','Kind','Amount','Paid','Due']].concat(d.debts.map(function(x){return[x.name,x.kind,x.amt,x.paid,x.due]})));
  put(ss,'Assets',[['Name','Type','Value']].concat(d.assets.map(function(a){return[a.name,a.type,a.value]})));
  put(ss,'Projects',[['Name','Status','Budget','Spent']].concat(d.projects.map(function(p){return[p.name,p.status,p.budget,p.spent]})));
  put(ss,'Budgets',[['Category','Monthly limit']].concat(Object.keys(d.budgets).map(function(k){return[k,d.budgets[k]]})));
  return out({ok:true});
}
function put(ss,name,rows){var s=ss.getSheetByName(name)||ss.insertSheet(name);s.clear();s.getRange(1,1,rows.length,rows[0].length).setValues(rows);}
function out(o){return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);}
