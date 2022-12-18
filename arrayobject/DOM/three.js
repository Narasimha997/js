let emp=[{"ID":26,"Name":"Padgett","Email":"plentep@newsvine.com"},
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
                    <td>${emp[i].Email.substr(emp[i].Email.indexOf('@')+1).toUpperCase( )}</td>

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