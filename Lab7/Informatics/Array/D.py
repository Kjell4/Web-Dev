n = input()
n = input()
a = n.split(" ")
cnt = 0

for i in range(len(a)):
    if i!=len(a)-1:
        if int(a[i+1]) > int(a[i]):
            cnt = cnt + 1

print(cnt)