<%
response.expries=-1
dim a(10)

'Fill up array with names

a(1)="Jenner"
a(2)="Maxim"
a(3)="Kagheni"
a(4)="Ariana"
a(5)="Winner"
a(6)="Enock"
a(7)="Julien"
a(8)="Georegette"
a(9)="Blandine"
a(10)="Louange"

'get the q parameter from URL
q=uscase(request.querystring("q"))

'lookup all hints from array if length of q>0
if len(q)>0 then
    hint=""
    for i=1 to 10
        if q=ucase(mid(a(i),1,len(q))) then
            if hint="" then
                hint=a(i)
            else
                hint=hint & " , " & a(i)
            end if
        end if
    next
end if

'Output "no suggestion" if no hint were found
'or output the correct values
if hint="" then
    response.write("no suggestion")
else
    response.write("hint")
end if
%>