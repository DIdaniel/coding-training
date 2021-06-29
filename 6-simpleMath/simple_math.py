'''
get_input(question: str)
	```
	stdin으로 input을 받음
	params
		question: prompt에서 표시되는 질문
	return
		int
	```
	stdin = question을 prompt에 보여주고 받은 stdin
	return stdin
end

# get_input으로 받은 값이 정수형 숫자가 아닌 경우?
# - 정수형 숫자가 나올 때까지 계속 받는다
# - 프로그램을 종료시킨다

# get_input으로 아무 값도 안 받으면
# - 숫자를 입력해주세요 print 후 다시 input

first_num = get_integer_input('What is the first number? ')
second_num = get_integer_input('What is the second number? ')

output = create output string with linebreak

print out (output)
'''
first_num = input('first num? ')
second_num = input('first num? ')
print(f'{first_num} + {second_num} = {int(first_num) + int(second_num)}')

