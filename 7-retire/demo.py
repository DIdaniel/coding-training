'''
int & int
int | int
소수점 & 소수점
소수점 | 소수점
not int & not int
a > b


test int
  currentAge => 25
  retireAge => 65
  print(retireAge - currentAge = 40)
  print(currentYear + (retireAge - currentAge))
end

test string 
  currentAge => ajisdjlf
  print('숫자를 입력해주세요')
  .
  .
  retireAge => asjkdlf
  print('숫자를 입력해주세요')
end

test 음수 / 기호 / 소수점
  currentAge => 음수가 오게 되면
  print('숫자만 입력해주세요')
  currentAge => 입력창 다시
  (반복)
  retireAge => 음수가 오면
  print('숫자만 입력해주세요')  
  retireAge => 입력창 다시
  (반복)
end

test currentAge > retireAge
  currentAge => 100
  retireAge => 65
  if(currentAge > retireAge) {
    print('이미 퇴직하셨네요!')
  }
end

'''

'''
currentYear = get_int_input(dateTime.today().year)
'''


# [ input ]
# currentAge = input("현재 나이는?")
# print(currentAge)
# retireAge = input("퇴직 나이는?")
# print(retireAge)

# [ get_this_year ]
# now = datetime.datetime.now()
# currentYear = now.year

# [ calculate ]
# leftAge = int(retireAge) - int(currentAge)
# leftYear = int(currentYear) + leftAge

# [ output ]



import datetime

current = input("현재 나이는?")
retireAge = input("퇴직 나이는?")

if (isinstance(int(current) & int(retireAge), int)):
  now = datetime.datetime.now()
  currentYear = now.year

  leftAge = int(retireAge) - int(current)
  leftYear = int(currentYear) + int(leftAge)
  
  print(
    f" You have {retireAge - current} years left until you can retire. It's {currentYear}, so you can retire in {currentYear + (retireAge - current)} "
  )
  
  elif (isinstance(int(current) or int(retireAge), str)):
    print("숫자를 입력해주세요")
    exit()
  elif (current > retireAge):
    print("이미 퇴직하셨네요!")
    exit()
  elif (not (int(current) & int(retireAge))):
    print('숫자를 입력해주세요!')
    exit()
  elif (not isinstance(int(current) and int(retireAge), int)):
    print('정수를 입력해주세요')
    exit()
  else:
    print("Error! Plz turn off and on")
    exit()
