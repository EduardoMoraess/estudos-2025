media1 = float(input('media1: '))
media2 = float(input('media2: '))
media3 = float(input('media3: '))
media4 = float(input('media4: '))

soma = (media1 + media2 + media3 + media4)/4

if soma >= 7:
    print(f'Sua mendia foi {soma:.1f}')
else:
    print('Vc foi reprovado')