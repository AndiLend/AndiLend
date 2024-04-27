use dep::std;

fn main(x: u32) -> pub u32 {
    if x <= 300 {
        0
    } else if x <= 700 {
        1
    } else {
        2
    }
}

#[test]
fn test_main() {
    let low_score = main(200);
    assert(low_score == 0);

    let medium_score = main(600);
    assert(medium_score == 1);

    let high_score = main(800);
    assert(high_score == 2);
}

