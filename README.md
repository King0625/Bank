# Bank

## Introduction

This project is designed for Bank Sinopac for renewing its inner system, e-loan system. Our design philosophy focuses on simple layouts and convenient features.

The team has 5 menbers. 
* Designer and Leader : 朱炳丞
* Front-end Engineer : [陳伯瑋](https://github.com/King0625), 曹能寶, [馮立壕](https://github.com/Secretlife108)
* Back-end Engineer : [林友鈞](https://github.com/yuchun1214)

---

## Environment

I recommend you use virtual environment

### Python Version

python version = 3.6.5

### virtualenv

**For linux or macOS**

- Create the virtualenv 

```bash=
$ virtualenv --python=python3 venv
```

- Go Into the virtualenv

```bash=
$ source ./venv/bin/activate
```

- Go out

```bash=
$ deactivate
```

### requirements

```bash=
$ pip install -r requirements.txt
```
---

## Execute

**The frame work which backend used is `django`**

The main project in the repo is `/Sinopac` please execute below command on terminal.

```bash=
$ cd ./Sinopac
```

### Create Your Own database

The database in this repo is just a test database. If you want to create your own database, please execute below command on terminal.

```bash=
$ python manage.py makemigrations
```

```bash=
$ python manage.py migrate
```

#### Create Super user

```bash=
$ python manage.py createsuperuser
```

### Start Server

```bash=
$ python manage.py runserver
```
