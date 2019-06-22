from django.db import models

class BasicData(models.Model):
    """
    一．基本資料查詢
    """
    identity = models.CharField(max_length=15) # 身分證字號
    name = models.CharField(max_length=11) # 名字
    address = models.CharField(max_length=50) # 住家地址
    person_phone = models.CharField(max_length=15) # 個人電話
    person_house_phone = models.CharField(max_length=15) # 個人住家電話
    company = models.CharField(max_length=50) # 公司
    company_phone = models.CharField(max_length=15) # 公司電話
    job_title = models.CharField(max_length=30) # 職業說明
    career = models.IntegerField() # 年資
    birthday = models.CharField(max_length=10) # 出生日期
    company_address = models.CharField(max_length=50) # 公司地址
    description = models.TextField(max_length=500) # 說明

    def __str__(self):
        return "%s %s %s" % (self.id, self.identity, self.name)
    
class BankDepositData(models.Model):
    """
    二．本行系統查詢
    """
    # 一、本行帳戶往來資料
    # (一)活期性存款往來資料查詢 :
    name = models.CharField(max_length=15) # 姓名
    identity = models.CharField(max_length=15) # 身分證字號
    account = models.CharField(max_length=20) # 帳號
    performance = models.IntegerField(null=True) # 績效行
    opnning_data = models.DateTimeField(null=True) # 開戶日
    a_year_average_balance = models.IntegerField(null=True) # 一年平均餘額
    six_month_average_balance = models.IntegerField(null=True) # 六個月平均餘額
    refund_record = models.IntegerField(null=True) # 退票紀錄
    seizure_deposit = models.IntegerField(null=True) # 扣押存款
    suspicious_account = models.BooleanField(null=True) # 可疑帳戶

    # (二)定期性存款往來資料查詢 : 
    regularly_deposit_data_query  = models.BooleanField(null=True)

    # (三)放款往來、保證資料查詢(額度有效記號限主債務):
    yet_settled_data = models.BooleanField(null=True)
    settled_data = models.BooleanField(null=True)
    flexible_hand_money = models.BooleanField(null=True)

    # (四)客戶貢獻程度分析查詢 :
    date_of_information = models.DateField()
    three_months_assets = models.IntegerField(null=True)
    AP = models.IntegerField(null=True)
    not_ap = models.IntegerField(null=True)
    last_ap = models.IntegerField(null=True)
    last_not_ap =  models.IntegerField(null=True)

    # (五)企金主從債務查詢 :
    debt_data_query = models.BooleanField(null=True)


    # (六)利害關係人海外放款往來資料查詢
    oversea_deposit_data_query = models.BooleanField(null=True)

    ###############################################################

    # 二、本行信用卡資料
    #(一)信用卡往來資料查詢 :
    credit_card_data_query = models.BooleanField(null=True)
    
    # (二)信用卡BLOCK CODE
    credit_card_BLOCK_CODE = models.BooleanField(null=True)

    ################################################################

    # 三、風險警訊資料
    # (一)不予承作資料查詢 :
    reject_case_data_query = models.BooleanField(null=True)

    # (二)支存拒往資料查詢
    refuse_data_query = models.BooleanField(null=True)

    # (三)利害關係人記錄查詢
    advantage_and_disadvantage_relationships_data_query = models.BooleanField(null=True)

    # (四)催收系統異常資料查詢
    urge_system_error_data_query = models.BooleanField(null=True)

    # (五)本行歷史資料查詢記錄 :
    bank_JCIC_database = models.BooleanField(null=True)
    credit_card_comment = models.BooleanField(null=True)
    credit_card_JCIC_other_bank_data = models.BooleanField(null=True)
    NCCCC_other_bank_reject_data = models.BooleanField(null=True)
    e_collection_delay_day = models.IntegerField(null=True)

    # (六)消債協商記號
    negotiate_data = models.BooleanField(null=True)

    # (七)信用卡金融同業通報註記
    credit_card_other_bank_comment = models.BooleanField(null=True)

    # (八)客戶風險等級資訊與防制洗錢FDD系統查詢
    new_batch_processing_day = models.DateTimeField(null=True) #最新跑批日

    # VERY_LOW = 'VL'
    # LOW = 'L',
    # MIDDLE = 'M'
    # HIGH = 'H'
    # VERY_HIGH = 'VH'


    # 洗錢風險分級
    LAUNDERING_RISK_GRADDING = (
        ('VL', '非常高風險'),
        ('L','低風險'),
        ('M','中風險'),
        ('H','高風險'),
        ('VH','非常高風險'),
    )  
    money_laundering_risk_degree = models.CharField(
        max_length=5,
        choices=LAUNDERING_RISK_GRADDING,
        default = 'VH'
    )

    priority_low = models.CharField(max_length=10,null=True) # 優先法
    background = models.CharField(max_length=50,null=True) # 客戶背景
    geographical_factor = models.CharField(max_length=50,null=True) # 地域因素
    relation_behavior = models.CharField(max_length=50,null=True) # 業務關係與交易行為
    production = models.CharField(max_length=20,null=True) # 商品
    money_laundering_risk_gradding = models.IntegerField(null=True) # 洗錢風險總得分
    FDD_information = models.BooleanField(null=True) # 防制洗錢FDD系統
    
    ##############################################################################

    # 四、行為評分卡評等
    # (一)房貸近一年行為評分卡評等
    house_debt_judge_score = models.IntegerField(default=0)

    # (二)車貸近一年行為評分卡評等
    car_debt_judge_score = models.IntegerField(default=0)


    def __str__(self):
        return "%s BankDepositData" %(self.name)
    
class UnionCreditCheckSystemInfo(models.Model):

    # Title information
    identity = models.CharField(max_length=15) #身分證字號
    name = models.CharField(max_length=11) # 姓名
    eng_name = models.CharField(max_length=30) # 英文姓名
    birthday = models.DateField() # 出生日期
    address = models.CharField(max_length=30) # 戶籍地址

    other_info = models.CharField(max_length=15,default='N') # 其餘資訊
    repay_info = models.CharField(max_length=15,default='N') # 新增額度及每筆撥款清償資訊
    identity_card_reissue_record = models.IntegerField(default=0) # 身分證申請補發記錄
    no_household_registration_in_TW = models.BooleanField(default=False) # 在台無戶籍人士身分註記
    refund_error_record = models.IntegerField(default=0) # 退票異常紀錄
    recent_credit_problem = models.DateField(null=True) # 最近授信異常日期 
    bulletined_case_record = models.IntegerField(default=0) # 通報案件紀錄
    cancel_debt_record = models.IntegerField(default=0) # 消債其他註記
    reject_contact_record = models.BooleanField(default=False) # 拒絕往來紀錄
    credits_problem_record = models.IntegerField(default=0) # 授信異常紀錄
    forced_stopping_credit_card_record = models.IntegerField(default=0) # 強制停卡紀錄

    ############################################################################################

    # (一)通報案件紀錄資訊

    # 1. 案件通報
    case_notification_record = models.TextField(default='無')  # 
    
    # 2. 遷徙公告
    migration_record = models.TextField(default='無') #
    
    # 3. 身分證更改記錄
    identity_modification_record = models.TextField(default='無') #

    # 4. 補充註記資訊
    supplement_comment_record = models.TextField(default='無') #

    # 5. 國民身分證領補換資料查詢驗證
    data_date = models.DateField()
    identity_record = models.CharField(max_length=15)
    reissue_code = models.IntegerField(default=0)
    reissue_date = models.DateField()
    birthdat_on_identity_system = models.DateField()
    issue_place = models.CharField(max_length=15,default='台灣')

    # 6. 在台無戶籍人士身分證資料
    no_household_registration_in_TW_identity_information = models.TextField(default='無')
    

    
    # (二) 授信保證資料
    
    data_date = models.DateField() # 資料日期
    financial_product_conflict_comment = models.TextField(default='無') # 衍生性金融商品交易轉捩授信爭議案件住記 
    joint_debt = models.TextField(default='查資料庫中無本人擔任他戶之共同債務資訊') # 共同債務 
    debt = models.TextField(default='無')
    other_information = models.TextField('無')
    
    # (三) 新增額度
    new_quota = models.TextField(default='無')

    # (四) 授信異常資料
    overdue_collection_of_bad_debts = models.TextField(default='無') # 逾期催收及呆帳資料
    transfer_of_overdue_information_claims = models.TextField(default='無') # 逾期資料債權轉讓
    Personal_unincorporated_organizations_info = models.TextField(default='無') # 個人餘催呆授信留向非法人組織資訊

    # (五) 票據退票及拒往資訊
    data_info_date = models.DateField()

    #(六) 信用卡資訊
    data_process_date = models.DateField() # 資料處理日期 : 20190423
    change_date = models.DateField() # 異動日期
    orgnization = models.CharField(max_length=20) # 報送機構
    ch_name = models.CharField(max_length=11) # 中文姓名
    birthday_on_credit_system = models.DateField() # 出生日期
    contact_address = models.TextField(default='') # 戶籍地址
    regirster_address = models.TextField(default='') # 通訊地址
    contact_phone_number = models.TextField(default='') # 居住電話
    company_phone_number = models.TextField(default='') # 任職電話
    company = models.TextField(default='') # 任職機構
    job_title = models.TextField(default='') # 職稱
    year_salary = models.IntegerField(default=0) # 年薪
    career = models.IntegerField(default=0) # 年資
    EDU_DEGREE = (
        ('PHD', '博士'),
        ('MASTER','碩士'),
        ('BAC','學士'),
        ('SH','高中'),
        ('JH','國中'),
        ('ES','國小'),
        ('NONE','無')
    )  
    edu_degree = models.CharField(
        max_length=5,
        choices=EDU_DEGREE,
        default = 'SH'
    ) # 教育程度
    owned_house = models.BooleanField(default=False) # 自用住宅有無

    # (七)最近三個月被查詢記錄
    new_business = models.IntegerField(default=0) # 新業務申請
    original_business = models.IntegerField(default=0) # 原業務申請
    new_and_original_business = models.IntegerField(default=0) # 原業務往來及新業務申請
    other_financial_org_query_after_quered = models.IntegerField(default=0) # 查詢當日截至目前金融機構查詢次數
    financial_query_time = models.IntegerField(default=0) # 金融機構查詢次數

    # (八) 信用評分
    score = models.IntegerField(default=0)

class CreditCardInformation(models.Model):
    identity = models.CharField(max_length=15,null=False)
    name = models.CharField(max_length=11,null=False)

    pass
    
    






    


