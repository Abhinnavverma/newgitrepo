let added = false;
document.getElementById('clickdiv').addEventListener('click', () => {
    if(!added) {
        added = true;
        document.getElementById('website').innerHTML = '<iframe src="https://abes.ac.in" title="description" width="100%" height="600px"></iframe>';
    }
    else{
        document.getElementById('website').innerHTML = '';
        added = false;
    }
});
