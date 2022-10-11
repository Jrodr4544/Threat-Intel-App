class CreatePulses < ActiveRecord::Migration[5.1]
  def change
    create_table :pulses do |t|

      t.timestamps
    end
  end
end
