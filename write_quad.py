import os
NL = chr(10)
Q = chr(34)
SQ = chr(39)
parts = []
parts.append('<!DOCTYPE html>')
parts.append('<html lang='+Q+'en'+Q+'>')
with open('esp32-quadcopter.html','w',encoding='utf-8') as f:
    f.write(NL.join(parts))
print('OK:', os.path.getsize('esp32-quadcopter.html'))
