class AddAttributesToPulses < ActiveRecord::Migration[5.1]
  def change
    add_column :pulses, :description, :text
    add_column :pulses, :author_name, :string
    add_column :pulses, :tlp, :string
    add_column :pulses, :adversary, :string
  end
end
