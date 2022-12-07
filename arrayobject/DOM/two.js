/*let emp=[{id:001,name:"Jeff",salary:45000},
{id:002,name:"Lebron",salary:56000},
{id:003,name:"Kobe",salary:57000}]*/
let emp=[{"ID":1,"Name":"Liam","Email":"lkelloway0@google.fr"},
{"ID":2,"Name":"Jamil","Email":"jjackman1@surveymonkey.com"},
{"ID":3,"Name":"Menard","Email":"mrubin2@mail.ru"},
{"ID":4,"Name":"Skippy","Email":"scolkett3@huffingtonpost.com"},
{"ID":5,"Name":"Jobye","Email":"jbree4@arstechnica.com"},
{"ID":6,"Name":"Vicky","Email":"vhallum5@posterous.com"},
{"ID":7,"Name":"Ryun","Email":"rgladdolph6@constantcontact.com"},
{"ID":8,"Name":"Ronni","Email":"rend7@discovery.com"},
{"ID":9,"Name":"Tallie","Email":"tcream8@state.tx.us"},
{"ID":10,"Name":"Bili","Email":"bdufer9@google.com.br"},
{"ID":11,"Name":"Sean","Email":"ssancrofta@ocn.ne.jp"},
{"ID":12,"Name":"Kendal","Email":"kmacparlanb@smugmug.com"},
{"ID":13,"Name":"Erminia","Email":"efrendc@feedburner.com"},
{"ID":14,"Name":"Stephen","Email":"smcreidyd@gizmodo.com"},
{"ID":15,"Name":"Cirillo","Email":"chenworthe@csmonitor.com"},
{"ID":16,"Name":"Devlin","Email":"dpawseyf@cloudflare.com"},
{"ID":17,"Name":"Karlens","Email":"kkrollg@storify.com"},
{"ID":18,"Name":"Thomasa","Email":"tpoteh@bing.com"},
{"ID":19,"Name":"Krisha","Email":"knesbyi@latimes.com"},
{"ID":20,"Name":"Lida","Email":"lbainej@xinhuanet.com"},
{"ID":21,"Name":"Joey","Email":"jambrosik@nhs.uk"},
{"ID":22,"Name":"Fanchon","Email":"fdennisl@meetup.com"},
{"ID":23,"Name":"Mannie","Email":"msybem@spotify.com"},
{"ID":24,"Name":"Terrence","Email":"ttrythalln@engadget.com"},
{"ID":25,"Name":"Leandra","Email":"lsclanderso@jugem.jp"},
{"ID":26,"Name":"Padgett","Email":"plentep@newsvine.com"},
{"ID":27,"Name":"Adora","Email":"ahollidgeq@list-manage.com"},
{"ID":28,"Name":"Samara","Email":"sbrabbsr@e-recht24.de"},
{"ID":29,"Name":"Merwin","Email":"mpenwardens@ed.gov"},
{"ID":30,"Name":"Wyn","Email":"wcraikert@dmoz.org"},
{"ID":31,"Name":"Glen","Email":"gdamperu@tinyurl.com"},
{"ID":32,"Name":"Haroun","Email":"hsweetmanv@cisco.com"},
{"ID":33,"Name":"Trevar","Email":"tfrawleyw@smugmug.com"},
{"ID":34,"Name":"Kenon","Email":"kheditchx@nifty.com"},
{"ID":35,"Name":"Gillie","Email":"gkelingy@pinterest.com"},
{"ID":36,"Name":"Ardra","Email":"aklimasz@phpbb.com"},
{"ID":37,"Name":"Bay","Email":"bcinderey10@123-reg.co.uk"},
{"ID":38,"Name":"Edita","Email":"eivashov11@xrea.com"},
{"ID":39,"Name":"Conny","Email":"cdickenson12@miibeian.gov.cn"},
{"ID":40,"Name":"Charlot","Email":"cpleasance13@mapy.cz"},
{"ID":41,"Name":"Jenelle","Email":"jdearlove14@free.fr"},
{"ID":42,"Name":"Theo","Email":"tmcevoy15@msn.com"},
{"ID":43,"Name":"Daryn","Email":"dasty16@deliciousdays.com"},
{"ID":44,"Name":"Collin","Email":"cbrewse17@yelp.com"},
{"ID":45,"Name":"Revkah","Email":"rbullick18@reuters.com"},
{"ID":46,"Name":"Niko","Email":"ncandwell19@alexa.com"},
{"ID":47,"Name":"Lindsey","Email":"lradleigh1a@hp.com"},
{"ID":48,"Name":"Francklyn","Email":"fasling1b@wordpress.com"},
{"ID":49,"Name":"Shantee","Email":"sgorsse1c@example.com"},
{"ID":50,"Name":"Keene","Email":"kpickles1d@etsy.com"}]
function display(){
    let row=""
    let i=0;
    while(i<=emp.length-1){
        
        row=row+`<tr>
                    <td>${emp[i].ID}</td>
                    <td>${emp[i].Name}</td> 
                    <td>${emp[i].Email}</td>
                    <td>${emp[i].Email.substr(emp[i].Email.indexOf('@')+1)}</td>

                      </tr>`
                      i++;
    }
    /*for(emps of emp){
        row=row+`<tr>
                    <td>${emps.ID}</td>
                    <td>${emps.Name}</td> 
                    <td>${emps.Email}</td>
                      </tr>`
    }*/
    document.getElementById('abc').innerHTML=row
}
