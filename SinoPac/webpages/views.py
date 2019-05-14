import json
import re
import webpages.models
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import loader
<<<<<<< HEAD
from webpages.models import BasicData,BankDepositData,FDDData
=======
from webpages.models import BasicData,BankDepositData,FDDData,UnionSearchData, Contribution,CreditCardBasicData
>>>>>>> 384b542a2c0e9047e17ee914641a781a0171ae66
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict


# __SQL_TABLE__ = [BankDepositData, FDDData, UnionSearchData, Contribution]
__SQL_TABLE = {
	"credit" : UnionSearchData,
	"creditCard" : CreditCardBasicData
}

__JUDGE_LIST = ['name','birthday','address','person_phone','person_house_phone','company','job_title','career']

def index(request):
	d = BasicData.objects.all()
	print(d)
	template = loader.get_template('webpages/index.html')
	return HttpResponse(template.render({},request))
	# return render(request, 'webpages/webpages.html', {}) 

@csrf_exempt
def basicDataQuery(request) :
	if request.method == 'GET':
		data = __basicDataQuery_GET()
		return HttpResponse(json.dumps(data,indent=4,ensure_ascii=False),content_type="application/json")
	else:
		__basicDataQuery_POST(request.body)
		return HttpResponse('POST SUCCESSFUL')

def __basicDataQuery_GET():
	d = BasicData.objects.all()
	data = []
	for i in d:
		temp = {}
		temp['id'] = i.id
		temp['person_id'] = i.identity
		temp['name'] = i.name
		temp['address'] = i.address
		temp['person_house_phone'] = i.person_house_phone
		temp['person_phone'] = i.person_phone
		temp['company'] = i.company
		temp['job_title'] = i.job_title
		temp['career'] = i.career
		temp['company_phone'] = i.company_phone
		temp['birthday'] = i.birthday
		temp['copAddress'] = i.company_address
		temp['description'] = i.description
		data.append(temp)
	return data
	
def __basicDataQuery_POST(data):
	
	data = json.loads(data,encoding=False)
	userid = data['id']
	del data['id']
	d = BasicData.objects.get(id=userid)

	if(len(data.keys()) > 1):
		# update sql
		for key, value in data.items():
			setattr(d,re.sub(r'person','',key),value)
		d.save()

	pass

@csrf_exempt
def bankDepositData(request):
	if request.method == 'GET':
		data = _bankDepositData_GET()
		return HttpResponse(json.dumps(data,indent=4, ensure_ascii=False),content_type="application/json")
		

def _bankDepositData_GET():
	data = []
	d = BankDepositData.objects.all()
	for i in d:
		userData = model_to_dict(i)
		dateTime = userData['opnning_data']
		userData['opnning_data'] = '%s/%s/%s' %(dateTime.year, dateTime.month, dateTime.day)
		data.append(userData)
	return data
	

@csrf_exempt
def FDDLevelData(request):
	if request.method == 'GET':
		data = _FDDLevelData_GET()
		return HttpResponse(json.dumps(data,indent=4,ensure_ascii=False),content_type='application/json')


def _FDDLevelData_GET():
	d = FDDData.objects.all()
	data = []
	for i in d:
		userData = model_to_dict(i)
		newBatchTime = userData['new_batch_processing_day']
		userData['new_batch_processing_day'] = '%s/%s/%s' % (newBatchTime.year, newBatchTime.month, newBatchTime.day)
		data.append(userData)
	return data
	

@csrf_exempt
def contributionData(request):
	if request.method == 'GET':
		data = _contributionData_GET()
		# data = []
		return HttpResponse(json.dumps(data,indent=4,ensure_ascii=False),content_type='application/json')
		pass
	pass

def _contributionData_GET():
	d = webpages.models.Contribution.objects.all()
	data = []
	for i in d:
		userData = model_to_dict(i)
		date = userData['date_of_information']
		# print(date.date)

		userData['date_of_information'] = '%s/%s/%s' % (date.year, date.month, date.day)
		data.append(userData)

	return data
	pass

@csrf_exempt
def unionCreditData(request):
	if request.method == 'GET':
		data = _unionCreditData_GET()
		return HttpResponse(json.dumps(data,indent=4, ensure_ascii=False),content_type = 'application/json')
		pass
	pass

def _unionCreditData_GET():
	d = webpages.models.UnionSearchData.objects.all()
	data = []
	for i in d:
		userData = model_to_dict(i)
		print(userData)
		dateTime = userData['birthday']
		userData['birthday'] = '%s/%s/%s' %(dateTime.year, dateTime.month, dateTime.day)
		data.append(userData)	
	return data
	pass

@csrf_exempt
def autoJudge(request):
	if request.method == 'GET':
		data = _autoJudge_GET()
		return HttpResponse(json.dumps(data,indent=4,ensure_ascii=False), content_type = 'application/json')
		pass
	pass

def _autoJudge_GET():
	d = BasicData.objects.all()
	temp = []
	result = []
	personAllData = {}
	personResult = []
	AllResult = []
	for i in d:
		basicdata = model_to_dict(i)
		temp_result = {}
		for j in __SQL_TABLE.keys():
			userData = __SQL_TABLE[j].objects.get(identity=i.identity)
			userJsonData = model_to_dict(userData)
			personAllData[j] = userJsonData
			# print(userJsonData)
			# print(json.dumps(userJsonData,indent=4))
		# print(personAllData)

		
		for j in __JUDGE_LIST:
			add = False
			temp_result[j] = []
			for k in personAllData.keys():
				try:
					print('basicData : %s, personAllData[%s] : %s' %(basicdata[j],k,personAllData[k][j]))
					if(basicdata[j] != personAllData[k][j]):
						print('in')
						temp_result[j].append({
							"field" : k,
							"text" : personAllData[k][j]
						})
						if(add == False):
							temp_result[j].append({
								"field" : "Basic",
								"text" : basicdata[j]
							})
							add = True
				except:
					pass
				
		AllResult.append(temp_result)

		for i in range(len(AllResult)):
			for j in range(len(AllResult[i]['birthday'])):
				try:
					AllResult[i]['birthday'][j]['text'] = '%s/%s/%s' %(AllResult[i]['birthday'][j]['text'].year,AllResult[i]['birthday'][j]['text'].month,AllResult[i]['birthday'][j]['text'].day)
				except:
					pass

		return AllResult


	
	pass


@csrf_exempt
def creditCardDataQuery(request):
	data = _creditCarDataQuery_GET()
	return HttpResponse(json.dumps(data,indent=4,ensure_ascii=False),content_type = 'application/json')
	pass

def _creditCarDataQuery_GET():
	d = CreditCardBasicData.objects.all()
	data = []
	for i in d:
		userData = model_to_dict(i)
		date = userData['change_date']
		userData['change_date'] = '%s/%s/%s' % (date.year, date.month, date.day)
		dateTime = userData['birthday']
		userData['birthday'] = '%s/%s/%s' %(dateTime.year, dateTime.month, dateTime.day)
		data.append(userData)

	return data
	pass

def test(request):

	return HttpResponse("application/json")


# Create your views here.
