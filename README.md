# Kalenderverktyg i Javascript.

<H2>Schemalagda todos</H2>
I den här uppgiften skall ni bygga ett verktyg där användaren kan skapa och schemalägga todos. Verktyget skall visa en lista med todos och en kalender för översikt. Utöver det tekniska som skall skapas så ämnar den här uppgiften att träna på att arbeta med git och GitHub i projektform.

Para ihop er i grupp om 3 - ni väljer själva vem ni jobbar med. Läs noga igenom hela uppgiftsbeskrivningen tillsammans och börja sedan med att planera och dela upp arbetet.

<H2>Projektet</H2>
När ni har läst hela uppgiftsbeskrivningen är det dags att strukturera ert arbete. Börja med att skapa ett repo på någons GitHub och bjud in de andra från gruppen. Lägg även upp alla ärenden (se lista nedan) som issues på GitHub och planera tillsammans vem som ska göra vad. För att få en bra och gemensam struktur kan det vara bra att göra skisser och/eller flödesdiagram över systemet så ni får en gemensam bild över vad som skall skapas. Allt förarbete ni gör med skisser eller annan diskussion bör läggas till i berörande ärende på GitHub. När det är dags att för er att börja bygga verktyget skall ni använda GitHub flow principen: 1 issue - 1 branch - 1 pull request.

Det är rekommenderat att ni gör det första ärendet tillsammans för att undvika merge konflikter. Innan ni påbörjar arbetet och tar egna ärende bör ni fundera på hur ni ska strukturera ert projekt och vilka filer som skall finnas. Exempelvis kan det vara bra att skapa en javascript fil för verktygets olika delar (todos.js, calendar.js och today.js). För att få till ett tydligare flöde i koden bör ni även skapa en huvudfil (main.js) där programmet börjar.

<H2>Verktyget</H2>
Det ni skall skapa är ett verktyg för att lägga till och ta bort todos. Dessa todos skall visas i en lista till vänster i det grafiska gränssnittet. Till höger skall det finnas en kalender som är länkad till de todos som har skapats. Men andra ord ska todos vara kopplade till en viss dag och visas i kalendern med en siffra som representerar hur många todos som ska göras den dagen. Ni får själva ta fram en egen grafisk profil för verktyget.

_Skiss att utgå ifrån till er layout (vissa delar så som väder och bilder behöver ni inte göra)_
![image](https://user-images.githubusercontent.com/89253350/190601575-f8ef32d0-2fcc-47ff-b44b-dddb082c2db7.png)

---

<H3>Lista av data-cy som ska finnas i koden</H3>

1. Välkomstsegment: data-cy="welcome-segment"
2. Lista över alla todo: data-cy="todo-list”
3. Div:n som innehåller alla dagarna i en månad: data-cy="calendar-body"
4. Input-fältet för datumet till en ny todo: data-cy="todo-date-input"
5. Input-fältet för todo detalj: data-cy="todo-task-input"
6. Knappen för att spara en ny todo: data-cy="save-todo"
7. Knappen för att ta bort en todo: data-cy="delete-todo-button”
8. Knappen för att ändra en todo: data-cy="edit-todo-button”
9. Knappen för att ändra månad till tidigare månaden: data-cy="prev-month"
10. Knappen för att ändra månad till nästa månaden: data-cy="next-month"
11. Den filtrerade todolistan utifrån vald dag: data-cy="filtered-todo-list"

<H3>Ärendelista</H3>

1. Skapa den övergripande layouten enligt skissen ovan. (G)
2. Det skall gå att använda verktyget på alla skärmstorlekar ner till 360px i bredd. (G)
3. Skapa och designa välkomstsegmentet (delen ovanför todo-listan) med tid, veckodag och datum presenteras. (G)
4. Användaren skall kunna lägga till en todo. (G)
5. Användaren skall kunna ta bort en todo. (G)
6. Skapa och designa kalendervyn med en månadsvy över aktuell månad. (G)
7. Kalendern ska visa hur många todos som är schemladaga för varje dag. (G)
8. Spara todos i local storage och visa dessa vid omladdning av sidan. (VG)
9. Användaren skall kunna ändra en todo. (VG)
10. Användaren skall kunna växla till andra månader i kalendervyn. (VG)
11. Svenska helgdagar visas i kalendern. (VG)
12. Filtrera todolistan utifrån vald dag i kalendern, det ska gå avmarkera vald dag. (VG)

<H3>Krav för godkänt</H3>

1. Uppgiften lämnas in i tid!
2. Verktyget fungerar enligt beskrivning.
3. Ärenden för godkänt är gjorda.
4. Git och GitHub har används enligt beskrivning.

<H3>Krav för väl godkänt</H3>

1. Alla punkter för godkänt är uppfyllda.
2. Ärenden för väl godkänt är gjorda.

<H4>LYCKA TILL!</H4>
