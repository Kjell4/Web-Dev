n = input()
n = input()
a = n.split(" ")
for i in range(len(a)):
    if int(a[i]) % 2 == 0:
        print(a[i], end=" ")