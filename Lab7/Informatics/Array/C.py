n = input()
n = input()
a = n.split(" ")
cnt = 0

for i in range(len(a)):
    if int(a[i]) > 0:
        cnt = cnt + 1

print(cnt)