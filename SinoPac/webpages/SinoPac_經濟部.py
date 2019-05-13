# -*- coding: utf-8 -*-
"""
Created on Thu May  9 20:30:08 2019

@author: Eric
"""

import requests
from bs4 import BeautifulSoup as bs
import pandas as pd
a=" 台達電子"
payload={
"errorMsg": "",
"validatorOpen": "N",
"rlPermit": "0",
"userResp": "",
"curPage":	"0",
"qryCond": a,
"infoType": "D",
"qryType": "cmpyType",
"cmpyType": "true",
"brCmpyType" : "",	
"busmType": "",
"factType": "",
"lmtdType": "",
"isAlive": "true",
"busiItemMain": "" ,
"busiItemSub" : ""
}




headers = {
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
		"Host": "findbiz.nat.gov.tw",
		"Referer": "https://findbiz.nat.gov.tw/fts/query/QueryList/queryList.do"
	}

url="https://findbiz.nat.gov.tw/fts/query/QueryList/queryList.do"
res= requests.post(url,data=payload,headers=headers)

soup=bs(res.text,'html.parser') 

#print(soup.prettify()) 

com=pd.Series()

for i in soup.findAll('a', "hover"):
    com=com.append(pd.Series([i.text])).reset_index(drop=True)
result=com.drop_duplicates()
print(result) 
    

     

     
     
