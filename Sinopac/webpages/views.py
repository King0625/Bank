import json
import re
import webpages.models
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from django.template import loader
from webpages.models import BasicData,BankDepositData,UnionCreditCheckSystemInfo,Case
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict
from django.db import connection



# __JUDGE_LIST = ['name','birthday','address','person_phone','person_house_phone','company','job_title','career']

__DATE_COL__ = {
	"BankDepositData" : [
		"openning_date",
		"date_of_information",
		"new_batch_processing_day"
	],
	"UnionCreditCheckSystemInfo" : [
		"birthday",
		"recent_credit_problem",
		"identity_data_date",
		"birthdat_on_identity_system",
		"reissue_date",
		"extend_credit_data_date",
		"data_info_date",
		"data_process_date",
		"change_date",
		"birthday_on_credit_system",
	]
}

def index(request):
	template = loader.get_template('webpages/todo.html')
	return HttpResponse(template.render({},request))


def case(request):
	"""
	Return the case.html
	"""
	template = loader.get_template('webpages/index.html')
	return HttpResponse(template.render({},request))
	# return render(request, 'webpages/webpages.html', {}) 

@csrf_exempt
def basicDataQuery(request) :
	print(request.GET)
	if request.method == 'GET':
		try:
			identity = Case.objects.get(id=request.GET['id']).identity

			BData = __basicDataQuery_GET(identity)
			BaData = getBankDepositData(identity)
			UData = getUnionCreditCheckSystemInfo(identity)

			data = {}
			data['BasicData'] = BData
			data['BankDepositData'] = BaData
			data['UnionCreditCheckSystemInfo'] = UData
		except:
			raise Http404("This Person Does Not Exist")
		return HttpResponse(json.dumps(data,indent=4,ensure_ascii=False),content_type="application/json")
	else:
		__basicDataQuery_POST(request.body)
		return HttpResponse('POST SUCCESSFUL')

def __basicDataQuery_GET(GETid):
	print(GETid)
	try:
		"""
		QUERY FAILED GETid isn't exist
		"""
		d = BasicData.objects.get(identity=GETid)
	except:
		return {}
	data = model_to_dict(d)
	data['birthday'] = '%s-%s-%s' %(data['birthday'].year,data['birthday'].month,data['birthday'].day)
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
def ToDoListQuery(request):
	if request.method == 'GET':
		data = _ToDoListQuery()
		# print(json.dumps(data,indent=4,ensure_ascii=False))
		return HttpResponse(json.dumps(data,indent=4,ensure_ascii=False),content_type="application/json")
		pass
	elif request.method == 'POST':
		pass

def _ToDoListQuery():
	d = Case.objects.all()
	data = []
	for i in d:
		temp = model_to_dict(i)
		temp['progress'] = temp['progress'] * 100
		if(temp['progress'] < 100):
			data.append(temp)

	return data
	
def getBankDepositData(personal_identity):
	data = getDataFromDB(personal_identity,BankDepositData,'BankDepositData')
	print(json.dumps(data,indent=4,ensure_ascii=False))
	return data

def getUnionCreditCheckSystemInfo(personal_identity) : 
	data = getDataFromDB(personal_identity, UnionCreditCheckSystemInfo,'UnionCreditCheckSystemInfo')
	print(json.dumps(data,indent=4,ensure_ascii=False))
	return data
	

def getDataFromDB(personal_identity, tb, tbName) : 
	data = tb.objects.get(identity=personal_identity)
	data = model_to_dict(data)
	for i in __DATE_COL__[tbName] :
		 data[i] = '%s-%s-%s' % (data[i].year, data[i].month, data[i].day) 
	return data

def test(request):
	data = BankDepositData.objects.get(identity=BasicData.objects.get(id=request.GET['id']).identity)
	print(data.identity)
	return HttpResponse(json.dumps({}),"application/json")


# Create your views here.
