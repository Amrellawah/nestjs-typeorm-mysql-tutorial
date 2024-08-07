import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";
import { Post } from "./Post";

@Entity({ name: 'users'})
export class User {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @Column( {unique: true})
    username: string;

    @Column()
    Password: string;

    @Column()
    createdat: Date;

    @Column({ nullable: true })
    authStrategy: string;

    @OneToOne(()=> Profile)
    @JoinColumn()
    profile: Profile;

   @OneToMany(() => Post, (post) => post.user)
   posts: Post[];
}