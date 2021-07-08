# 둘 다 Number => pass
# 하나만 Number => "숫자를 입력해주세요"
# 음수 => "음수는 안돼요!"

firstInput = input('What Is The First Number? ')
secondInput = input('What Is The Second Number? ')

# firstInt = int(firstInput)
# secondInt = int(secondInput)

def calculate(firstInput, secondInput):
  if int(firstInput) > 0 & int(secondInput) > 0:
    print(firstInput + secondInput)
    print(firstInput - secondInput)
    print(firstInput * secondInput)
    print(firstInput / secondInput)
  elif firstInput == int or secondInput == int:
    print("숫자를 입력해주세요")
  elif firstInput < 0 | secondInput < 0:
    print("음수는 안돼요!")
  else:
    print('프로그램을 종료합니다!')


calculate(firstInput, secondInput)