class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer  :commenter_id
      t.integer  :post_id
      t.string   :comment_text
      t.timestamps(null: false)
    end
  end
end
