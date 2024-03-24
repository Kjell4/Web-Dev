n = input()
n = input()
a = n.split(" ")
check = False

for i in range(len(a)):
    if i!=len(a)-1:
        if int(a[i+1]) > 0 and int(a[i]) > 0:
            print("YES")
            check = True
            break
        elif int(a[i+1]) < 0 and int(a[i]) < 0:
            print("YES")
            check = True
            break

if(check == False):
    print("NO")
