# -*- coding: utf-8 -*-
"""
Created on Tue May  7 16:29:10 2019

@author: Eric
"""
import requests
import pandas as pd
a='0287972088' #格式： 區碼+電話號碼= 0423602111
#02-87972088 台達電    
#06-2757575 成大
#06-2536789 統一
url="https://www.iyp.com.tw/phone.php?phone={}".format(a)

res=requests.get(url)
res.encoding='utf8'
#print(res.text)
from bs4 import BeautifulSoup as bs  

soup=bs(res.text,'html.parser') 


books=pd.Series()
for i in soup.select("h3 a"): 
   books=books.append(pd.Series(i['title'])).reset_index(drop=True) 
   
print(books[0])
