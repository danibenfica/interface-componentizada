import React from "react";
import * as S from './styled'
import useGithub from "../../hooks/github-hooks";
import { cleanup } from "@testing-library/react";

function Profile() {

    const { githubState } = useGithub();

    return <S.Wrapper>
        <S.WrapperImg 
            src={githubState.user.avatar}
            alt="avatar of user"
            /> 
            <S.WrapperInfoUser>
            <div>
                <h1>{githubState.user.name}</h1>
                <S.WrapperUserGeneric>
                    <h3>Username:</h3>
                    <a
                    href={githubState.user.html_url}
                    target="blank"
                    rel="noreferrer">
                    {githubState.user.login}
                    </a>
                </S.WrapperUserGeneric>  
                <S.WrapperUserGeneric>
                    <h3>Company:</h3>
                    <span>{githubState.user.company}</span>
                </S.WrapperUserGeneric>  
                <S.WrapperUserGeneric>
                    <h3>Location:</h3>
                    <span>{githubState.user.location}</span>
                </S.WrapperUserGeneric> 
                <S.WrapperUserGeneric>
                    <h3>Blog:</h3>
                    <a
                    href={githubState.user.blog}
                    target="blank"
                    rel="noreferrer">
                    {githubState.user.blog}
                    </a>
                </S.WrapperUserGeneric>
            </div> 

        <div>
          <S.WrapperStatusCount>
            <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
            </div>
            <div>
                <h4>Following</h4>
                <span>{githubState.user.following}</span>
            </div>
            <div>
                <h4>Gists</h4>
                <span>{githubState.user.public_gists}</span>
            </div>
            <div>
                <h4>Repos</h4>
                <span>{githubState.user.public_repos}</span>
            </div>
          </S.WrapperStatusCount>
          <div/> 
          </div>  
        </S.WrapperInfoUser>
    </S.Wrapper>;
}

export default Profile;