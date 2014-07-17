require 'spec_helper'

describe "menus/new" do
  before(:each) do
    assign(:menu, stub_model(Menu,
      :dish => "MyText",
      :weekday => 1,
      :restaurant => nil
    ).as_new_record)
  end

  it "renders new menu form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", menus_path, "post" do
      assert_select "textarea#menu_dish[name=?]", "menu[dish]"
      assert_select "input#menu_weekday[name=?]", "menu[weekday]"
      assert_select "input#menu_restaurant[name=?]", "menu[restaurant]"
    end
  end
end
