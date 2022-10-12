class CreateIndicators < ActiveRecord::Migration[5.1]
  def change
    create_table :indicators do |t|
      t.string :value
      t.string :category

      t.references :pulse, foreign_key: true
      t.timestamps
    end
  end
end
