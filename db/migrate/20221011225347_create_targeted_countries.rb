class CreateTargetedCountries < ActiveRecord::Migration[5.1]
  def change
    create_table :targeted_countries do |t|
      t.string :name

      t.timestamps
    end
  end
end
