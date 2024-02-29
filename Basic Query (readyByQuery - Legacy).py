import requests

url = "https://api.intacct.com/ia/xml/xmlgw.phtml"

payload = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<request>\n  <control>\n    <senderid></senderid>\n    <password></password>\n    <controlid></controlid>\n    <uniqueid>false</uniqueid>\n    <dtdversion>3.0</dtdversion>\n    <includewhitespace>false</includewhitespace>\n  </control>\n  <operation>\n    <authentication>\n      <sessionid>{SESSION ID FROM AUTH Call}</sessionid>\n    </authentication>\n    <content>\n      <function controlid=\"test\">\n        <query>\n            <object></object>\n            <filter>\n                <equalto>\n                    <field></field>\n                    <value></value>\n                </equalto>\n            </filter>\n            <select>\n                <field></field>\n                <field></field>\n            </select>\n        </query>\n      </function>\n    </content>\n  </operation>\n</request>\n"
headers = {
  'Content-Type': 'application/xml',
  'Cookie': 'DFT_LOCALE=en_US.UTF-8'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)