function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

function calculateTotal()
{
  let unit_price={
    blue: 22.05,
    green: 21.92,
    og_other: 21.14,
    pump: 10.80,
    red: 10.55,
    gc_other: 10.16,
    pitch: 5000,
    claymate: 1250,
  };
  let item_price={}

    //Clay Nation Math
  item_price.blue = ($("#qty_blue").val() * unit_price.blue )
  var blue_price = item_price.blue;
  blue_price_rounded = blue_price.toFixed(2);
  yearly_blue_price_rounded = (blue_price*365).toFixed(2);
  $("#price_blue").val(blue_price_rounded);
  $("#yearly_price_blue").val(yearly_blue_price_rounded);

  item_price.green = ($("#qty_green").val() * unit_price.green )
  var green_price = item_price.green;
  green_price_rounded = green_price.toFixed(2);
  yearly_green_price_rounded = (green_price*365).toFixed(2);
  $("#price_green").val(green_price_rounded);
  $("#yearly_price_green").val(yearly_green_price_rounded);

  item_price.og_other = ($("#qty_og_other").val() * unit_price.og_other )
  var og_other_price = item_price.og_other;
  og_other_price_rounded = (og_other_price*365).toFixed(2);
  $("#yearly_price_og_other").val(og_other_price_rounded);
  og_other_rounded = og_other_price.toFixed(2)
  $("#price_og_other").val(og_other_rounded);



  let og_daily_total = item_price.blue + item_price.green + item_price.og_other;
  let og_round_daily = og_daily_total.toFixed(2);
  let og_yearly_total = item_price.blue * 365 + item_price.green * 365 + item_price.og_other * 365;
  let og_round_yearly = og_yearly_total.toFixed(2);

  $("#og_daily_total_value").text(og_round_daily);
  $("#og_yearly_total_value").text(og_round_yearly);

  // Good Charlotte Math
  item_price.pump = ($("#qty_pump").val() * unit_price.pump )
  var pump_price = item_price.pump;
  pump_price_rounded = pump_price.toFixed(2);
  yearly_pump_price_rounded = (pump_price*365).toFixed(2);
  $("#price_pump").val(pump_price_rounded);
  $("#yearly_price_pump").val(yearly_pump_price_rounded);

  item_price.red = ($("#qty_red").val() * unit_price.red )
  var red_price = item_price.red;
  red_price_rounded = red_price.toFixed(2);
  yearly_red_price_rounded = (red_price*365).toFixed(2);
  $("#price_red").val(red_price_rounded);
  $("#yearly_price_red").val(yearly_red_price_rounded);

  item_price.gc_other = ($("#qty_gc_other").val() * unit_price.gc_other )
  var gc_other_price = item_price.gc_other;
  gc_other_price_rounded = gc_other_price.toFixed(2);
  yearly_gc_other_price_rounded = (gc_other_price*365).toFixed(2);
  $("#price_gc_other").val(gc_other_price_rounded);
  $("#yearly_price_gc_other").val(yearly_gc_other_price_rounded);


  let gc_daily_total = item_price.pump + item_price.red + item_price.gc_other;
  let gc_round_daily = gc_daily_total.toFixed(2);
  let gc_yearly_total = item_price.pump * 365 + item_price.red * 365 + item_price.gc_other * 365;
  let gc_round_yearly = gc_yearly_total.toFixed(2);

  $("#gc_daily_total_value").text(gc_round_daily);
  $("#gc_yearly_total_value").text(gc_round_yearly);

  //Pitch Math
  item_price.pitch = ($("#qty_pitch").val() * unit_price.pitch);
  $("#pitch_total_value").val(item_price.pitch);

   //ClayMates Math
  item_price.claymate = ($("#qty_claymate").val() * unit_price.claymate);
  $("#claymate_total_value").val(item_price.claymate);

  let pitch_claymate_total = item_price.pitch + item_price.claymate * 3;
  $("#pitch_cm_total_value").text(pitch_claymate_total);

  //MASTER TOTALS
  //Daily
  let daily_total = item_price.blue + item_price.green + item_price.og_other + item_price.pump + item_price.red + item_price.gc_other;
  daily_total = daily_total.toFixed(2)
  $("#daily_total").text(daily_total);
  //Yearly
  let yearly_total = item_price.blue * 365 + item_price.green * 365 + item_price.og_other * 365 + item_price.pump * 365 + item_price.red * 365 + item_price.gc_other * 365 + item_price.claymate;
  yearly_total = yearly_total.toFixed(2)
  $("#yearly_total").text(yearly_total);
  // 3 Year total
  let total = (item_price.blue * 365 + item_price.green * 365 + item_price.og_other * 365 + item_price.pump * 365 + item_price.red * 365 + item_price.gc_other * 365 + item_price.claymate) * 3 + item_price.pitch;
  total = total.toFixed(2)
  $("#total").text(total);
}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})

