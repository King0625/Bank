from django.urls import path

from . import views

urlpatterns = [
		path('case/',views.case, name='case'),
		path('',views.index,name='index'),
		path('test/',views.test,name='test'),
		path('ToDoList/',views.ToDoListQuery,name='to-do'),
		path('basicData/',views.basicDataQuery,name='basicDataQuery'),
		path('autoJudge/',views.autoJudge,name="autoJudge"),
		path('loan/',views.loan,name="loan"),
		path('information/',views.info,name="info"),
		path('tinyInfo/',views.loanData,name="tinyInfo"),
		# path('bankDepositData/',views.bankDepositData,name="bankDepositData"),
		# path('contrubutionData/',views.contributionData, name='contributionData'),
		# path('FDDData/',views.FDDLevelData,name ='FDDData'),
		# path('unionData/',views.unionCreditData,name='UnionData'),
		# path('creditCardData/',views.creditCardDataQuery,name='creditCardData'),
		# path('autoJudgeData/', views.autoJudge,name='autoJudge'),
	]