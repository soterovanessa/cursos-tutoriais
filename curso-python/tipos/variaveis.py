#encoding: utf-8

a = 3
b = 4.4

print(a+b)

texto = 'Sua idade é...'
idade = 23

# print(texto + str(idade))
print(f'{texto} {idade}')

saudacao = 'bom dia '
print(3 * saudacao)
# print(3 * 'bom dia ')

PI = 3.14
raio =float(input('Informe o raio da circ? '))
# area = PI * raio * raio
area = PI * pow(raio, 2)

print(f'A área da circ é {area} m2.')
