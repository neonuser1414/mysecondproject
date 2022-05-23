let span = document.querySelector('.vv3__span');
let span2 = document.querySelector('.vv3__span2');
i = 0;

span.onclick = () =>{
	i++;
	if (i % 2 == 0 || i==1){
		span2.style.display = "inline-block";
		span.innerHTML = "Свернуть";
	}
	else{
		span2.style.display = "none";
		span.innerHTML = "Читать далее";
	}
}


