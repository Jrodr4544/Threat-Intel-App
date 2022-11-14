class AddNameUniquenessToPulse < ActiveRecord::Migration[5.1]
  def change
    add_column :pulses, :name, :string
#    add_index :pulses, :name, unique: true
  end
end
