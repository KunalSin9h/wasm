mod math {
    mod math_js {
        #[link(wasm_import_module = "Math")]
        extern "C" {
            pub fn random() -> f64;
        }
    }

    pub fn random() -> f64 {
        unsafe{
            math_js::random()
        }
    }
}

#[export_name = "add"]
pub extern "C" fn add(left: usize, right: usize) -> usize {
    left + right +  math::random() as usize
}
