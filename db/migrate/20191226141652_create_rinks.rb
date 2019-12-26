class CreateRinks < ActiveRecord::Migration[6.0]
  def change
    create_table :rinks do |t|
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
