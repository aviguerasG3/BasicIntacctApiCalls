const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/xml");
myHeaders.append("Cookie", "DFT_LOCALE=en_US.UTF-8");

const raw = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<request>\r\n  <control>\r\n    <senderid></senderid>\r\n    <password></password>\r\n    <controlid></controlid>\r\n    <uniqueid>false</uniqueid>\r\n    <dtdversion>3.0</dtdversion>\r\n    <includewhitespace>false</includewhitespace>\r\n  </control>\r\n  <operation>\r\n    <authentication>\r\n      <login>\r\n        <userid></userid>\r\n        <companyid></companyid>\r\n        <password></password>\r\n      </login>\r\n    </authentication>\r\n    <content>\r\n      <function controlid=\"test\">\r\n        <getAPISession />\r\n      </function>\r\n    </content>\r\n  </operation>\r\n</request>";

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