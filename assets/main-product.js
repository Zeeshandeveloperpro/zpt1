function onVariantChange() {
  let variants = JSON.parse(document.querySelector('[data-product-variants]').textContent);
  
  
    let option1 = null;
    let option2 = null;
    let option3 = null;

    document.querySelectorAll(".option_value:checked").forEach((selectedValue , index) => {
        if (index === 0) option1 = selectedValue.value;
        if (index === 1) option2 = selectedValue.value;
        if (index === 2) option3 = selectedValue.value;
        // console.log(selectedValue)
    })
    let SelectedVariant  = variants.find(variant => variant.option1 == option1 && variant.option2 == option2 && variant.option3 == option3 )
    console.log(SelectedVariant , variants , option1 )
}

document.addEventListener("DOMContentLoaded" , ()=> {
    onVariantChange()

document.querySelectorAll(".option_value").forEach((option) => {
  option.addEventListener("change", () => {
    
    onVariantChange()

  });
});

})



