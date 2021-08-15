lockdown = False
grana = 130

status = 'Em casa' if lockdown or grana <= 100 else 'Uhuuu'

print(f'O Status é: {status}')