# -*- coding: utf-8 -*-

# 인풋 : string 넣는 input 만들기
# string function
# 아웃풋 : STRING has STRING.LENGTH characters

say = input('What is the input string? : ')


def smthString(say) :
  print(say + ' has ' + str(len(say)) + ' characters' )

smthString(say)