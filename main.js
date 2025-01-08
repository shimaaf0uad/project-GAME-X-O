let title = document.querySelector(".title");
let turn = "x"; // بدء اللعبة مع "x"
let squares = Array(10).fill(""); // مصفوفة لحفظ حالة المربعات، تم تهيئتها كـ "فارغة"

// دالة التحقق من الفائز
function end(num1, num2, num3) {
    title.innerHTML = $
    {squares[num1]} Winner; // عرض الفائز
    document.getElementById("item" + num1).style.background = "#000";    
    document.getElementById("item" + num2).style.background = "#000";   
    document.getElementById("item" + num3).style.background = "#000";

    setTimeout(function () { location.reload(); }, 4000); // إعادة تحميل الصفحة بعد 4 ثواني
}

// التحقق من الفائز بعد كل حركة
function winner() {
    for (let i = 1; i <= 9; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML; // تحديث المصفوفة بحالة المربعات
    }
    
    // التحقق من جميع حالات الفوز (صفوف، أعمدة، وقطريات)
    if (squares[1]===  squares[2] && squares[2] === squares[3] && squares[1] !== "") {     
        end(1, 2, 3);===
    } else if (squares[4] === squares[5] && squares[5] === squares[6] && squares[4] !== "") {     
        end(4, 5, 6);
    } else if (squares[7] === squares[8] && squares[8] === squares[9] && squares[7] !== "") {     
        end(7, 8, 9);
    } else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] !== "") {     
        end(1, 4, 7);
    } else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] !== "") {     
        end(2, 5, 8);
    } else if (squares[3] === squares[6] && squares[6] === squares[9] && squares[3] !== "") {     
        end(3, 6, 9);
    } else if (squares[1] === squares[5] && squares[5] === squares[9] && squares[1] !== "") {     
        end(1, 5, 9);
    } else if (squares[3] === squares[5] && squares[5] === squares[7] && squares[3] !== "") {     
        end(3, 5, 7);
    } else {
        // تحقق من التعادل إذا كانت جميع المربعات مليئة ولكن لا يوجد فائز
        let isDraw = squares.slice(1).every(square => square !== "");
        if (isDraw) {
            title.innerHTML = "It's a Draw!";
            setTimeout(function () { location.reload(); }, 4000); // إعادة تحميل الصفحة بعد 4 ثواني
        }
    }
}

// دالة اللعبة، يتم استدعاؤها عند الضغط على أحد المربعات
function game(id) {
    let element = document.getElementById(id);
    
    // إذا كانت الخانة فارغة، قم بوضع الرمز المناسب
    if (turn === "x" && element.innerHTML === "") {
        element.innerHTML = "x";
        turn = "o"; // التبديل إلى "o"
        title.innerHTML = "o";
    } else if (turn === "o" && element.innerHTML === "") {
        element.innerHTML = "o";
        turn = "x"; // التبديل إلى "x"
        title.innerHTML = "x";
    }
    
    winner(); // التحقق من الفائز بعد كل حركة
}