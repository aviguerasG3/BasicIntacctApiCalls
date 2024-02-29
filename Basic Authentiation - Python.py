import requests

url = "https://api.intacct.com/ia/xml/xmlgw.phtml"

payload = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<request>\r\n  <control>\r\n    <senderid></senderid>\r\n    <password></password>\r\n    <controlid></controlid>\r\n    <uniqueid>false</uniqueid>\r\n    <dtdversion>3.0</dtdversion>\r\n    <includewhitespace>false</includewhitespace>\r\n  </control>\r\n  <operation>\r\n    <authentication>\r\n      <login>\r\n        <userid>avlarochelle</userid>\r\n        <companyid></companyid>\r\n        <password></password>\r\n      </login>\r\n    </authentication>\r\n    <content>\r\n      <function controlid=\"test\">\r\n        <getAPISession />\r\n      </function>\r\n    </content>\r\n  </operation>\r\n</request>"
headers = {
  'Content-Type': 'application/xml',
  'Cookie': 'DFT_LOCALE=en_US.UTF-8'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)