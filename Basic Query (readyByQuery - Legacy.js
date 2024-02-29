const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/xml");
myHeaders.append("Cookie", "DFT_LOCALE=en_US.UTF-8");

const raw = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<request>\n  <control>\n    <senderid></senderid>\n    <password></password>\n    <controlid></controlid>\n    <uniqueid>false</uniqueid>\n    <dtdversion>3.0</dtdversion>\n    <includewhitespace>false</includewhitespace>\n  </control>\n  <operation>\n    <authentication>\n      <sessionid>{SESSION ID FROM AUTH Call}</sessionid>\n    </authentication>\n    <content>\n      <function controlid=\"test\">\n        <query>\n            <object></object>\n            <filter>\n                <equalto>\n                    <field></field>\n                    <value></value>\n                </equalto>\n            </filter>\n            <select>\n                <field></field>\n                <field></field>\n            </select>\n        </query>\n      </function>\n    </content>\n  </operation>\n</request>\n";

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.intacct.com/ia/xml/xmlgw.phtml", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));